import { useEffect, useRef } from "react";
import Matter from "matter-js";
import MatterAttractors from "matter-attractors";
import MatterWrap from "matter-wrap";

const Canvas = () => {
  const sceneRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Register plugins once
    Matter.use(MatterAttractors);
    Matter.use(MatterWrap);

    // Module aliases
    const {
      Engine,
      Render,
      Runner,
      World,
      Bodies,
      Body,
      Events,
      Common,
      Mouse,
    } = Matter;

    // Create engine and world
    const engine = Engine.create();
    const world = engine.world;
    world.gravity.y = 0;
    world.gravity.x = 0;
    world.gravity.scale = 0.1;

    // Get dimensions
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Create renderer
    const render = Render.create({
      element: sceneRef.current,
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width,
        height,
        background: "transparent",
        wireframes: false,
        showVelocity: false,
      },
    });

    // Create runner
    const runner = Runner.create();

    // Central attractor body
    const attractiveBody = Bodies.circle(
      width / 2,
      height / 2,
      Math.max(width / 25, height / 25) / 2,
      {
        isStatic: true,
        render: {
          fillStyle: "#000",
          strokeStyle: "#000",
          lineWidth: 0,
        },
        plugin: {
          attractors: [
            (bodyA, bodyB) => ({
              x: (bodyA.position.x - bodyB.position.x) * 1e-6,
              y: (bodyA.position.y - bodyB.position.y) * 1e-6,
            }),
          ],
        },
      }
    );

    World.add(world, attractiveBody);

    // Add multiple bodies
    for (let i = 0; i < 60; i++) {
      const x = Common.random(0, width);
      const y = Common.random(0, height);
      const s =
        Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
      const polygonSides = Common.random(3, 6);
      const r = Common.random(0, 1);

      const polygon = Bodies.polygon(x, y, polygonSides, s, {
        mass: s / 20,
        friction: 0,
        frictionAir: 0.02,
        angle: Math.round(Math.random() * 360),
        render: {
          fillStyle: "#222222",
          strokeStyle: "#000000",
          lineWidth: 2,
        },
      });

      const circles = [
        Bodies.circle(x, y, Common.random(2, 8), {
          mass: 0.1,
          friction: 0,
          frictionAir: 0.01,
          render: {
            fillStyle: r > 0.3 ? "#27292d" : "#444444",
            strokeStyle: "#000000",
            lineWidth: 2,
          },
        }),
        Bodies.circle(x, y, Common.random(2, 20), {
          mass: 6,
          friction: 0,
          frictionAir: 0,
          render: {
            fillStyle: r > 0.3 ? "#334443" : "#222222",
            strokeStyle: "#111111",
            lineWidth: 4,
          },
        }),
        Bodies.circle(x, y, Common.random(2, 30), {
          mass: 0.2,
          friction: 0.6,
          frictionAir: 0.8,
          render: {
            fillStyle: "#191919",
            strokeStyle: "#111111",
            lineWidth: 3,
          },
        }),
      ];

      World.add(world, [polygon, ...circles]);
    }

    // Mouse attraction
    const mouse = Mouse.create(render.canvas);
    Events.on(engine, "afterUpdate", () => {
      if (!mouse.position.x) return;
      Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.12,
        y: (mouse.position.y - attractiveBody.position.y) * 0.12,
      });
    });

    // Run engine and render
    Runner.run(runner, engine);
    Render.run(render);

    // Resize handling
    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
      World.clear(world);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <div
      id="wrapper-canvas"
      className="absolute inset-0 hidden md:block overflow-hidden"
      ref={sceneRef}
    >
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Canvas;
