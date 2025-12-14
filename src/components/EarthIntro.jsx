import { createSignal, onMount, onCleanup, Show } from "solid-js";
import * as THREE from "three";
import { gsap } from "gsap";

export default function EarthIntro({ onComplete }) {
  const [loading, setLoading] = createSignal(true);
  const [progress, setProgress] = createSignal(0);
  const [searchText, setSearchText] = createSignal("HAMZA BOULAHIA");
  const [searchActive, setSearchActive] = createSignal(true);
  const [searchPhase, setSearchPhase] = createSignal(0);
  const [status, setStatus] = createSignal("Initializing system...");

  let containerRef;
  let scene,
    camera,
    renderer,
    earth,
    clouds,
    atmosphere,
    stars,
    scanLine,
    targetMarker,
    photo;
  let animationId;
  let clock = new THREE.Clock();
  let earthRotationTween;

  // NASA textures with fallbacks
  const TEXTURES = {
    earth:
      "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg",
    clouds:
      "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_clouds_1024.png",
  };

  // Create procedural Earth texture as fallback
  function createProceduralEarthTexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");

    // Ocean background
    const oceanGrad = ctx.createLinearGradient(0, 0, 0, 512);
    oceanGrad.addColorStop(0, "#1a5276");
    oceanGrad.addColorStop(1, "#0a3d62");
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(0, 0, 1024, 512);

    // Draw simplified continents - positioning Africa correctly
    ctx.fillStyle = "#27ae60";

    const moroccoX = 512 - (7 / 360) * 1024;
    const moroccoY = 256 - (32 / 180) * 256;

    // Draw Africa shape
    ctx.beginPath();
    ctx.moveTo(moroccoX - 50, moroccoY - 20);
    ctx.lineTo(moroccoX + 100, moroccoY - 40);
    ctx.lineTo(moroccoX + 150, moroccoY + 80);
    ctx.lineTo(moroccoX - 100, moroccoY + 100);
    ctx.lineTo(moroccoX - 150, moroccoY + 40);
    ctx.closePath();
    ctx.fill();

    // Morocco dot
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(moroccoX, moroccoY, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "#ff4444";
    ctx.lineWidth = 3;
    ctx.stroke();

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  async function loadTextures() {
    const loader = new THREE.TextureLoader();
    const textures = {
      earth: null,
      clouds: null,
    };

    try {
      const earthPromise = new Promise((resolve) => {
        const timeout = setTimeout(() => {
          resolve(createProceduralEarthTexture());
        }, 3000);

        loader.load(
          TEXTURES.earth,
          (texture) => {
            clearTimeout(timeout);
            setProgress(50);
            resolve(texture);
          },
          undefined,
          (error) => {
            clearTimeout(timeout);
            resolve(createProceduralEarthTexture());
          }
        );
      });

      const cloudsPromise = new Promise((resolve) => {
        loader.load(
          TEXTURES.clouds,
          (texture) => {
            setProgress(100);
            resolve(texture);
          },
          undefined,
          () => {
            setProgress(100);
            resolve(null);
          }
        );
      });

      textures.earth = await earthPromise;
      textures.clouds = await cloudsPromise;
    } catch (error) {
      console.error("Texture loading error:", error);
      textures.earth = createProceduralEarthTexture();
      setProgress(100);
    }

    return textures;
  }

  function createEarth(textures) {
    const geometry = new THREE.SphereGeometry(1, 64, 64);

    const material = new THREE.MeshPhongMaterial({
      map: textures.earth,
      specular: new THREE.Color(0x222222),
      shininess: 5,
    });

    earth = new THREE.Mesh(geometry, material);

    if (textures.clouds) {
      const cloudsGeometry = new THREE.SphereGeometry(1.02, 64, 64);
      const cloudsMaterial = new THREE.MeshPhongMaterial({
        map: textures.clouds,
        transparent: true,
        opacity: 0.3,
        depthWrite: false,
      });
      clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
      earth.add(clouds);
    }

    const atmosphereGeometry = new THREE.SphereGeometry(1.1, 32, 32);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x0099ff,
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide,
    });

    atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    earth.add(atmosphere);

    return earth;
  }

  function createStars() {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 5000; i++) {
      const radius = 100 + Math.random() * 400;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      vertices.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    const material = new THREE.PointsMaterial({
      size: 1,
      color: 0xffffff,
      sizeAttenuation: true,
    });

    return new THREE.Points(geometry, material);
  }

  function createScanLine() {
    const geometry = new THREE.PlaneGeometry(2.5, 0.02);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
    });

    const line = new THREE.Mesh(geometry, material);
    line.rotation.x = Math.PI / 2;
    line.visible = false;

    return line;
  }

  function createTargetMarker() {
    const group = new THREE.Group();

    const createPhotoTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext("2d");

      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = "/hamza.png";

      img.onload = () => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(128, 128, 110, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();

        const scale = Math.max(256 / img.width, 256 / img.height);
        const x = (256 - img.width * scale) / 2;
        const y = (256 - img.height * scale) / 2;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

        ctx.restore();

        ctx.strokeStyle = "#00ff88";
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.arc(128, 128, 115, 0, Math.PI * 2);
        ctx.stroke();

        photoTexture.needsUpdate = true;
      };

      img.onerror = () => {
        ctx.fillStyle = "#1a5276";
        ctx.fillRect(0, 0, 256, 256);
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 40px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("HB", 128, 128);
      };

      return new THREE.CanvasTexture(canvas);
    };

    const photoTexture = createPhotoTexture();

    const photoGeometry = new THREE.CircleGeometry(0.03, 32);
    const photoMaterial = new THREE.MeshBasicMaterial({
      map: photoTexture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const photo = new THREE.Mesh(photoGeometry, photoMaterial);
    group.add(photo);

    const outerRing = new THREE.RingGeometry(0.07, 0.09, 32);
    const outerMaterial = new THREE.MeshBasicMaterial({
      color: 0xff4444,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
    });
    const outer = new THREE.Mesh(outerRing, outerMaterial);
    group.add(outer);

    const innerRing = new THREE.RingGeometry(0.06, 0.065, 32);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
    });
    const inner = new THREE.Mesh(innerRing, innerMaterial);
    group.add(inner);

    const lineLength = 0.09;
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xff4444,
      transparent: true,
      opacity: 0,
    });

    const horizontalPoints = [
      new THREE.Vector3(-lineLength, 0, 0),
      new THREE.Vector3(lineLength, 0, 0),
    ];
    const horizontalGeometry = new THREE.BufferGeometry().setFromPoints(
      horizontalPoints
    );
    const horizontalLine = new THREE.Line(horizontalGeometry, lineMaterial);
    group.add(horizontalLine);

    const verticalPoints = [
      new THREE.Vector3(0, -lineLength, 0),
      new THREE.Vector3(0, lineLength, 0),
    ];
    const verticalGeometry = new THREE.BufferGeometry().setFromPoints(
      verticalPoints
    );
    const verticalLine = new THREE.Line(verticalGeometry, lineMaterial);
    group.add(verticalLine);

    const glowGeometry = new THREE.RingGeometry(0.03, 0.06, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    group.add(glow);

    group.userData = {
      outer,
      inner,
      horizontalLine,
      verticalLine,
      glow,
      photo,
    };

    group.visible = false;
    return group;
  }

  function createPhoto() {
    const group = new THREE.Group();

    const geometry = new THREE.PlaneGeometry(0.4, 0.4);
    const canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 400;
    const ctx = canvas.getContext("2d");

    const grad = ctx.createRadialGradient(200, 200, 0, 200, 200, 200);
    grad.addColorStop(0, "#1a5276");
    grad.addColorStop(1, "#0a3d62");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 400, 400);

    const img = new Image();
    img.onload = () => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(200, 200, 150, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();

      const scale = Math.max(400 / img.width, 400 / img.height);
      const x = (400 - img.width * scale) / 2;
      const y = (400 - img.height * scale) / 2;
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      ctx.restore();
    };
    img.src = "/hamza.png";

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide,
    });
    const photo = new THREE.Mesh(geometry, material);
    group.add(photo);

    const glowGeometry = new THREE.CircleGeometry(0.22, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      transparent: true,
      opacity: 0.1,
      side: THREE.DoubleSide,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.position.z = -0.01;
    group.add(glow);

    group.scale.set(0, 0, 0);
    group.visible = false;

    return group;
  }

  async function init() {
    try {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000011);

      camera = new THREE.PerspectiveCamera(
        60,
        containerRef.clientWidth / containerRef.clientHeight,
        0.1,
        1000
      );
      camera.position.set(0, 0, 8);

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(containerRef.clientWidth, containerRef.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      containerRef.appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      const mainLight = new THREE.DirectionalLight(0xffffff, 0.8);
      mainLight.position.set(5, 3, 5);
      scene.add(mainLight);

      setStatus("Loading planetary data...");
      const textures = await loadTextures();
      setStatus("Initializing search grid...");
      earth = createEarth(textures);
      earth.rotation.y = 0.5;
      scene.add(earth);

      stars = createStars();
      scene.add(stars);

      scanLine = createScanLine();
      earth.add(scanLine);

      targetMarker = createTargetMarker();
      const lat = (29.7917 * Math.PI) / 180;
      const lon = (7.5 * Math.PI) / 180;
      targetMarker.position
        .set(
          Math.cos(lat) * Math.cos(lon),
          Math.sin(lat),
          Math.cos(lat) * Math.sin(lon)
        )
        .multiplyScalar(1.05);
      targetMarker.lookAt(0, 0, 0);
      earth.add(targetMarker);

      photo = createPhoto();
      photo.position.set(0, 2, 4);
      scene.add(photo);

      setTimeout(() => {
        setLoading(false);
        setStatus("System ready. Press ENTER to search.");
      }, 500);

      function animate() {
        animationId = requestAnimationFrame(animate);
        const delta = clock.getDelta();

        if (earth) {
          earth.rotation.y += delta * 0.1;
        }

        if (clouds) {
          clouds.rotation.y += delta * 0.15;
        }

        renderer.render(scene, camera);
      }

      animate();

      const handleResize = () => {
        if (!containerRef) return;
        camera.aspect = containerRef.clientWidth / containerRef.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(containerRef.clientWidth, containerRef.clientHeight);
      };

      window.addEventListener("resize", handleResize);

      const handleKeyPress = (e) => {
        if (e.key === "Enter" && !loading() && searchActive()) {
          startSearchAnimation();
        }
      };

      window.addEventListener("keypress", handleKeyPress);

      onCleanup(() => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("keypress", handleKeyPress);
        window.removeEventListener("resize", handleResize);
        if (
          renderer &&
          containerRef &&
          renderer.domElement.parentNode === containerRef
        ) {
          containerRef.removeChild(renderer.domElement);
          renderer.dispose();
        }
      });
    } catch (error) {
      console.error("Error initializing scene:", error);
      setStatus("System error. Please refresh.");
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }

  function startSearchAnimation() {
    setSearchActive(false);
    setSearchPhase(1);
    setStatus("Initializing search protocol...");

    const moroccoLat = (31.7917 * Math.PI) / 180;
    const moroccoLon = (-7.0926 * Math.PI) / 180;

    const moroccoPos = new THREE.Vector3(
      Math.cos(moroccoLat) * Math.cos(moroccoLon),
      Math.sin(moroccoLat),
      Math.cos(moroccoLat) * Math.sin(moroccoLon)
    );

    gsap.to(".search-container", {
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        setSearchPhase(2);
        setStatus("Scanning global database...");

        scanLine.visible = true;
        gsap.to(scanLine.material, {
          opacity: 0.7,
          duration: 0.3,
        });

        gsap.to(scanLine.position, {
          y: 1.5,
          duration: 1.5,
          ease: "power1.inOut",
          onComplete: () => {
            setSearchPhase(3);
            setStatus("Target located: Morocco");

            scanLine.visible = false;
            const testRotations = [0, 1.57, 3.14, 3.02, 4.71, 5.76, 6.02];

            let rotationIndex = 0;

            function tryNextRotation() {
              if (rotationIndex < testRotations.length) {
                const testRotation = testRotations[rotationIndex];
                gsap.to(earth.rotation, {
                  duration: 0.6,
                  y: testRotation,
                  x: -0.2,
                  ease: "power2.inOut",
                  onComplete: () => {
                    const testPos = moroccoPos.clone();
                    testPos.applyAxisAngle(
                      new THREE.Vector3(0, 1, 0),
                      earth.rotation.y
                    );

                    if (testPos.z > 0.8) {
                      showTargetMarker();
                    } else {
                      rotationIndex++;
                      setTimeout(tryNextRotation, 300);
                    }
                  },
                });
              } else {
                showTargetMarker();
              }
            }

            function showTargetMarker() {
              targetMarker.visible = true;

              const {
                outer,
                inner,
                horizontalLine,
                verticalLine,
                glow,
                photo,
              } = targetMarker.userData;

              photo.scale.set(0, 0, 0);
              gsap.to(photo.scale, {
                duration: 0.5,
                x: 1,
                y: 1,
                z: 1,
                ease: "back.out(1.7)",
              });

              gsap.to(outer.material, {
                opacity: 0.9,
                duration: 0.5,
                ease: "power2.out",
              });

              gsap.to(inner.material, {
                opacity: 0.8,
                duration: 0.5,
                delay: 0.2,
                ease: "power2.out",
              });

              gsap.to(horizontalLine.material, {
                opacity: 0.6,
                duration: 0.6,
                delay: 0.4,
              });

              gsap.to(verticalLine.material, {
                opacity: 0.6,
                duration: 0.4,
                delay: 0.4,
              });

              gsap.to(glow.material, {
                opacity: 0.3,
                duration: 0.4,
              });

              gsap.to(glow.scale, {
                x: 1.2,
                y: 1.2,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
              });

              gsap.to(outer.scale, {
                x: 1.2,
                y: 1.2,
                duration: 0.4,
                repeat: 2,
                yoyo: true,
                ease: "power2.inOut",
                onComplete: () => {
                  setSearchPhase(4);
                  setStatus("Establishing visual connection...");
                  zoomToMorocco();
                },
              });

              gsap.to(photo.rotation, {
                z: Math.PI * 2,
                duration: 20,
                repeat: -1,
                ease: "none",
              });
            }

            tryNextRotation();
          },
        });
      },
    });

    function zoomToMorocco() {
      const moroccoWorldPos = new THREE.Vector3();
      targetMarker.getWorldPosition(moroccoWorldPos);

      // Smoother zoom distance transition
      const zoomDistance = 1.3;
      const offset = new THREE.Vector3(0.3, 0.4, 0.6);

      // Calculate target camera position
      const targetCameraPos = new THREE.Vector3(
        moroccoWorldPos.x * zoomDistance + offset.x,
        moroccoWorldPos.y * zoomDistance + offset.y,
        moroccoWorldPos.z * zoomDistance + offset.z
      );

      // Get current camera position
      const currentCameraPos = camera.position.clone();

      // Smooth transition with easing
      setStatus("Zooming to target location...");

      // Use a smoother easing curve and longer duration for better transition
      gsap.to(camera.position, {
        duration: 2, // Increased from 2.5 for smoother transition
        x: targetCameraPos.x,
        y: targetCameraPos.y,
        z: targetCameraPos.z,
        ease: "power2.inOut",
        onStart: () => {
          // Ensure earth rotation animation stops
          if (earthRotationTween) earthRotationTween.kill();
        },
        onUpdate: () => {
          // Smoothly interpolate lookAt position
          const progress =
            gsap.getProperty(camera.position, "x") !== currentCameraPos.x
              ? (camera.position.x - currentCameraPos.x) /
                (targetCameraPos.x - currentCameraPos.x)
              : 0;

          // Smooth lookAt interpolation
          const lookAtPos = new THREE.Vector3().lerpVectors(
            new THREE.Vector3(0, 0, 0), // Start looking at center
            moroccoWorldPos, // End looking at Morocco
            progress
          );

          camera.lookAt(lookAtPos);
        },
        onComplete: () => {
          // Ensure final lookAt is exact
          camera.lookAt(moroccoWorldPos);
          revealPhoto(moroccoWorldPos);
        },
      });
    }

    function revealPhoto(moroccoWorldPos) {
      setSearchPhase(5);
      setStatus("Target found: HAMZA BOULAHIA");

      const { photo, glow } = targetMarker.userData;

      gsap.to(photo.scale, {
        duration: 1,
        x: 1.5,
        y: 1.5,
        z: 1.5,
        ease: "back.out(1.7)",
      });

      gsap.to(glow.material, {
        opacity: 0.6,
        duration: 0.8,
      });

      gsap.to(glow.scale, {
        x: 1.5,
        y: 1.5,
        duration: 0.8,
      });

      gsap.to(earth.material, {
        duration: 1,
        opacity: 0.2,
      });

      setTimeout(() => {
        gsap.to(containerRef, {
          duration: 1.5,
          opacity: 0,
          ease: "power2.inOut",
          onComplete: () => {
            if (onComplete) onComplete();
          },
        });
      }, 3000);
    }
  }

  onMount(() => {
    init();
  });

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999,
        background: "linear-gradient(135deg, #000000 0%, #001122 100%)",
        fontFamily: "'Courier New', monospace",
        overflow: "hidden",
      }}
    >
      {/* Loading Screen */}
      <Show when={loading()}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#00ff88",
            zIndex: 1001,
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              border: "2px solid rgba(0, 255, 136, 0.3)",
              borderTop: "3px solid #00ff88",
              borderRight: "3px solid #0088ff",
              borderRadius: "50%",
              margin: "0 auto 30px",
              animation:
                "spin 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite",
              boxShadow: "0 0 30px rgba(0, 255, 136, 0.3)",
            }}
          />
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "15px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              textShadow: "0 0 10px rgba(0, 255, 136, 0.7)",
            }}
          >
            GLOBAL LOCATOR SYSTEM
          </div>
          <div
            style={{
              fontSize: "14px",
              marginBottom: "20px",
              opacity: 0.9,
              letterSpacing: "1px",
            }}
          >
            {status()}
          </div>
          <div
            style={{
              width: "300px",
              height: "4px",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "4px",
              overflow: "hidden",
              margin: "0 auto",
              boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)",
            }}
          >
            <div
              style={{
                width: `${progress()}%`,
                height: "100%",
                background: "linear-gradient(90deg, #00ff88, #0088ff, #00ff88)",
                transition: "width 0.3s ease-out",
                boxShadow: "0 0 10px rgba(0, 255, 136, 0.5)",
              }}
            />
          </div>
          <div
            style={{
              fontSize: "12px",
              marginTop: "15px",
              color: "rgba(0, 255, 136, 0.5)",
              letterSpacing: "2px",
            }}
          >
            VERSION 2.0.1
          </div>
        </div>
      </Show>

      {/* Main Container */}
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "100%",
          opacity: loading() ? 0 : 1,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Enhanced Search Interface */}
      <Show when={!loading() && searchActive()}>
        <div
          class="search-container"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: `
              radial-gradient(
                circle at 50% 50%,
                rgba(0, 30, 60, 0.9) 0%,
                rgba(0, 10, 25, 0.95) 100%
              ),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 1px,
                rgba(0, 255, 136, 0.05) 2px,
                transparent 3px
              )
            `,
            backdropFilter: "blur(5px)",
            zIndex: 1000,
          }}
        >
          {/* Grid Lines */}
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundImage: `
                linear-gradient(rgba(0, 255, 136, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 136, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
              pointerEvents: "none",
              zIndex: -1,
            }}
          />

          {/* Center Container */}
          <div
            style={{
              position: "relative",
              width: "600px",
              maxWidth: "90%",
              background: "rgba(0, 20, 40, 0.6)",
              border: "1px solid rgba(0, 255, 136, 0.2)",
              borderRadius: "15px",
              padding: "40px",
              backdropFilter: "blur(10px)",
              boxShadow: `
                0 0 50px rgba(0, 255, 136, 0.1),
                inset 0 0 30px rgba(0, 255, 136, 0.05),
                0 0 0 1px rgba(0, 255, 136, 0.1)
              `,
            }}
          >
            {/* Header */}
            <div
              style={{
                textAlign: "center",
                marginBottom: "40px",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  color: "#00ff88",
                  marginBottom: "10px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                }}
              >
                Global Personnel Locator
              </div>
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: "bold",
                  background:
                    "linear-gradient(45deg, #00ff88, #0088ff, #00ff88)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundSize: "200% 200%",
                  animation: "gradientShift 3s ease infinite",
                  marginBottom: "15px",
                  letterSpacing: "1px",
                }}
              >
                G.P.S
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "rgba(0, 255, 136, 0.5)",
                  letterSpacing: "1px",
                }}
              >
                Enter target name and press ENTER
              </div>
            </div>

            {/* Search Input */}
            <div
              style={{
                position: "relative",
                marginBottom: "40px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  background: "rgba(0, 15, 30, 0.8)",
                  border: "1px solid rgba(0, 255, 136, 0.3)",
                  borderRadius: "10px",
                  padding: "15px 20px",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    color: "#00ff88",
                    marginRight: "15px",
                    fontSize: "20px",
                    animation: "pulse 2s infinite",
                  }}
                >
                  »
                </div>
                <input
                  type="text"
                  value={searchText()}
                  onInput={(e) => setSearchText(e.target.value.toUpperCase())}
                  style={{
                    flex: 1,
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "#00ff88",
                    fontSize: "24px",
                    fontFamily: "'Courier New', monospace",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                  }}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") startSearchAnimation();
                  }}
                  autoFocus
                />
                <div
                  style={{
                    color: "rgba(0, 255, 136, 0.5)",
                    fontSize: "14px",
                    marginLeft: "15px",
                  }}
                >
                  [ENTER]
                </div>
              </div>

              {/* Input Glow Effect */}
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  right: "0",
                  bottom: "0",
                  background:
                    "linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.1), transparent)",
                  borderRadius: "10px",
                  opacity: 0.5,
                  animation: "glide 2s ease-in-out infinite",
                  pointerEvents: "none",
                  zIndex: -1,
                }}
              />
            </div>

            {/* Status Bars */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <div
                style={{ color: "rgba(0, 255, 136, 0.8)", fontSize: "12px" }}
              >
                SYSTEM STATUS
              </div>
              <div
                style={{
                  color: "#00ff88",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                ONLINE
              </div>
            </div>
            <div
              style={{
                height: "3px",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "2px",
                marginBottom: "30px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(90deg, #00ff88, #0088ff)",
                  animation: "scan 2s linear infinite",
                }}
              />
            </div>

            {/* Instructions */}
            <div
              style={{
                textAlign: "center",
                color: "rgba(255, 255, 255, 0.4)",
                fontSize: "11px",
                letterSpacing: "1px",
              }}
            >
              <div style={{ marginBottom: "5px" }}>
                INITIALIZING SEARCH PROTOCOL
              </div>
            </div>
          </div>

          {/* Animated Corner Elements */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "620px",
              height: "calc(100% + 80px)",
              pointerEvents: "none",
              zIndex: -1,
            }}
          >
            {/* Top Left */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                left: "-20px",
                width: "40px",
                height: "40px",
                borderTop: "2px solid #00ff88",
                borderLeft: "2px solid #00ff88",
              }}
            />
            {/* Top Right */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                width: "40px",
                height: "40px",
                borderTop: "2px solid #00ff88",
                borderRight: "2px solid #00ff88",
              }}
            />
            {/* Bottom Left */}
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                left: "-20px",
                width: "40px",
                height: "40px",
                borderBottom: "2px solid #00ff88",
                borderLeft: "2px solid #00ff88",
              }}
            />
            {/* Bottom Right */}
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                width: "40px",
                height: "40px",
                borderBottom: "2px solid #00ff88",
                borderRight: "2px solid #00ff88",
              }}
            />
          </div>

          {/* Floating Particles */}
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: -1,
            }}
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: "1px",
                  height: "1px",
                  background: "#00ff88",
                  borderRadius: "50%",
                  animation: `particleFloat ${
                    3 + Math.random() * 2
                  }s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                  boxShadow: "0 0 10px #00ff88",
                }}
              />
            ))}
          </div>

          {/* Footer Status */}
          <div
            style={{
              position: "absolute",
              bottom: "30px",
              left: "0",
              right: "0",
              textAlign: "center",
              color: "rgba(0, 255, 136, 0.6)",
              fontSize: "12px",
              letterSpacing: "2px",
              animation: "blink 3s infinite",
            }}
          >
            {status()}
          </div>
        </div>
      </Show>

      {/* Enhanced Status Display */}
      <Show when={!loading() && !searchActive()}>
        <div
          class="status-display"
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            right: "20px",
            color: "#00ff88",
            fontSize: "13px",
            fontFamily: "'Courier New', monospace",
            background: "rgba(0, 20, 40, 0.7)",
            padding: "15px 20px",
            borderRadius: "10px",
            border: "1px solid rgba(0, 255, 136, 0.3)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 5px 30px rgba(0, 0, 0, 0.5)",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ fontWeight: "bold", letterSpacing: "1px" }}>
              {status()}
            </div>
            <br />
            <div
              style={{
                fontSize: "11px",
                color: "rgba(0, 255, 136, 0.7)",
                animation: "pulse 1.5s infinite",
                position: "relative",
                left: "20px!important",
                marginRight: "10px",
              }}
            >
              PHASE {searchPhase()}/5
            </div>
          </div>
          <div
            style={{
              height: "3px",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${searchPhase() * 20}%`,
                height: "100%",
                background: "linear-gradient(90deg, #00ff88, #ff4444)",
                transition: "width 0.5s ease",
                boxShadow: "0 0 10px rgba(0, 255, 136, 0.5)",
              }}
            />
          </div>
        </div>
      </Show>

      {/* CSS Animations */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes glide {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        
        @keyframes particleFloat {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
        }
        
        input {
          caret-color: #00ff88;
          animation: caretBlink 1s infinite;
        }
        
        @keyframes caretBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        
        input:focus {
          outline: none;
        }
        
        .search-container input:focus ~ div {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}
