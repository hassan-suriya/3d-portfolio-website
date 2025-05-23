# 🌌 3D Interactive Portfolio Website

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/yourusername/3d-portfolio/deploy.yml?branch=main&style=for-the-badge&logo=github)
![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=next.js)
![Three.js](https://img.shields.io/badge/Three.js-r152-black?style=for-the-badge&logo=three.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)

<p align="center">
   <img src="https://via.placeholder.com/800x400.png?text=3D+Portfolio+Website" alt="Portfolio Screenshot" width="800"/>
</p>

> **🎨 A modern, interactive 3D portfolio website built with Next.js, Three.js, and TypeScript featuring immersive tech-themed environments.**

### ✨ [Live Demo](https://hassan-suriya.github.io/3d-portfolio)

## 💫 Features

- **🏙️ 3D Room Transitions** - Navigate between portfolio sections as immersive 3D environments
- **📜 Scroll-based Parallax** - Interactive 3D elements responding to user scroll
- **💎 Modern UI Design** - Clean, minimalist approach with smooth animations
- **⚡ Performance Optimized** - Efficient 3D rendering with React Three Fiber
- **📱 Responsive Design** - Works beautifully across all device sizes
- **🎭 Tech-Themed Components** - Custom 3D tech models that reflect developer skills

## 🚀 Tech Stack

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Static type checking
- **[Three.js](https://threejs.org/)** - 3D library for JavaScript
- **[React Three Fiber](https://github.com/pmndrs/react-three-fiber)** - React renderer for Three.js
- **[React Three Drei](https://github.com/pmndrs/drei)** - Useful helpers for React Three Fiber
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library for React
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Post-processing](https://github.com/pmndrs/react-postprocessing)** - Advanced visual effects

## 🛠️ Installation & Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/3d-portfolio.git
   cd 3d-portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🔧 Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Only needed for GitHub Pages deployment if your repo is not at the root
# NEXT_PUBLIC_BASE_PATH=/3d-portfolio
```

## 🖥️ Development

The project follows a structured approach with:

- `src/components/` - React components including 3D models and UI elements
- `src/components/rooms/` - Individual portfolio sections
- `src/hooks/` - Custom React hooks
- `src/app/` - Next.js App Router pages and layouts

### Key Components:

- `Portfolio3D.tsx` - Main 3D portfolio container
- `Scene3D.tsx` - 3D scene management
- `TechModels.tsx` - Custom tech-themed 3D models
- `TextMesh.tsx` - Text rendering in 3D space

## 📦 Build & Deployment

### Local Build

```bash
npm run build
```

The build output will be in the `out` directory, ready for static hosting.

### GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages:

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. Your portfolio will be available at `https://yourusername.github.io/3d-portfolio`

### GitHub Workflows

You can view the workflow runs in the Actions tab of your repository:
`https://github.com/yourusername/3d-portfolio/actions`

The workflow will:
1. Build your Next.js application
2. Generate static files
3. Deploy them to GitHub Pages
4. Make your site available online

## 🎨 Customization

### Adding New 3D Models:

1. Create new components in `TechModels.tsx`
2. Import and position them in `Scene3D.tsx`

### Modifying Room Content:

Edit the individual room components in `src/components/rooms/` to update content.

## 📝 License

[MIT](LICENSE) © Hassan Suriya | ByteForth

---

<p align="center">
   Made with ❤️ and Three.js
</p>
