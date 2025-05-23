# Copilot Instructions for 3D Portfolio Website

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This is a modern 3D portfolio website built with Next.js, TypeScript, and Three.js. The project features:

## Project Structure
- **Framework**: Next.js 15 with App Router and TypeScript
- **3D Graphics**: Three.js with React Three Fiber (@react-three/fiber)
- **3D Utilities**: React Three Drei (@react-three/drei) for helpers and abstractions
- **Animation**: Framer Motion for smooth transitions and parallax effects
- **Styling**: Tailwind CSS for responsive design
- **Post-processing**: @react-three/postprocessing for visual effects

## Key Features to Implement
1. **3D Room Transitions**: Different portfolio sections as virtual rooms
2. **Scroll-based Parallax**: Interactive 3D elements responding to scroll
3. **Modern UI**: Clean, minimalist design with smooth animations
4. **Performance Optimized**: Efficient 3D rendering and asset loading
5. **Responsive Design**: Works across all device sizes

## Development Guidelines
- Use TypeScript for all components and utilities
- Implement proper Three.js performance optimizations (useFrame, useMemo, etc.)
- Create reusable 3D components and hooks
- Follow React Three Fiber best practices
- Implement smooth scroll-based animations with Framer Motion
- Use Tailwind utilities for consistent styling
- Optimize 3D models and textures for web performance

## Code Style
- Use functional components with hooks
- Implement proper TypeScript typing for Three.js objects
- Use descriptive component and variable names
- Add JSDoc comments for complex 3D logic
- Follow React Three Fiber conventions for 3D scenes
