# Modern Business SPA Template

A modern, responsive Single Page Application (SPA) template built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🚀 Built with Next.js 14 and TypeScript
- 🎨 Styled with Tailwind CSS
- 🎬 Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🔍 SEO optimized
- 🌐 Modern loading screen
- ⚡ Fast performance
- 🔝 Scroll to top button
- 🎯 Google Maps integration
- 📧 Contact form with validation
- 📊 Interactive statistics
- 🎥 Video background support
- 🌙 Smooth scrolling
- 📱 Mobile-first approach

## Sections

- Modern Hero section with video background
- About section with company overview
- Services section with interactive cards
- Portfolio section with filtering
- Testimonials carousel
- Contact section with map and form
- Footer with newsletter subscription

## Getting Started

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/spa-nextjs.git
cd spa-nextjs
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create a \`.env.local\` file in the root directory and add your Google Maps API key:
\`\`\`
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
\`\`\`

4. Add your background video:
- Place your video file in \`public/video/hero-background.mp4\`

5. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Colors
- Edit the Tailwind configuration in \`tailwind.config.js\`
- Default primary color is blue-600 (#3B82F6)

### Content
- Update text content in respective components
- Modify images and videos in the \`public\` directory
- Customize form fields in the Contact component

### Styling
- All components use Tailwind CSS classes
- Edit animations in Framer Motion configurations
- Modify responsive breakpoints in component classes

## Deployment

1. Update metadata in \`src/app/layout.tsx\`:
- Site URL
- Social media images
- Site name and description

2. Build the project:
\`\`\`bash
npm run build
\`\`\`

3. Deploy to your preferred hosting platform (Vercel recommended)

## Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)
- [@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email your-email@example.com or open an issue in this repository.
