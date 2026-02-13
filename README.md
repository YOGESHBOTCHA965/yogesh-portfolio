# Yogesh's Professional Portfolio

A modern, responsive portfolio website built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS** to showcase your professional work, experience, and skills as a web developer.

## 🚀 Features

### Pages Included:
1. **Home (Landing Page)** - Your name, professional photo, short bio, quick stats, and navigation
2. **Projects** - Showcase your work with detailed descriptions, technologies used, and links
3. **Experience** - Professional work history with timeline view
4. **Education** - Academic background and certifications
5. **Skills** - Technical skills organized by category with proficiency levels
6. **Contact** - Contact form, contact information, and social media links

### Design Highlights:
- 🎨 Modern dark theme with blue accent colors
- 📱 Fully responsive design (mobile, tablet, desktop)
- ✨ Smooth animations and transitions
- 🔗 Easy navigation between pages
- 🎯 SEO-friendly structure
- ♿ Accessible components

## 📋 Project Structure

```
yogesh-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Main layout with navigation & footer
│   │   ├── page.tsx            # Home/landing page
│   │   ├── globals.css         # Global styles
│   │   ├── projects/
│   │   │   └── page.tsx        # Projects page
│   │   ├── experience/
│   │   │   └── page.tsx        # Work experience page
│   │   ├── education/
│   │   │   └── page.tsx        # Education & certifications page
│   │   ├── skills/
│   │   │   └── page.tsx        # Technical skills page
│   │   └── contact/
│   │       └── page.tsx        # Contact page with form
│   └── components/
│       ├── Navigation.tsx      # Navigation bar
│       └── Footer.tsx          # Footer component
├── public/                     # Static assets (add your images here)
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript config
├── next.config.js             # Next.js config
├── tailwind.config.ts         # Tailwind CSS config
└── postcss.config.mjs         # PostCSS config

```

## 🛠️ Tech Stack

- **Framework**: Next.js 16+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build**: npx create-next-app
- **Hosting Ready**: Deploy to Vercel (recommended)

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Getting Started

1. **Navigate to the project folder**:
   ```bash
   cd yogesh-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   - Navigate to `http://localhost:3000`
   - Your portfolio will load with hot-reload enabled

## ✏️ Customization Guide

### 1. **Update Your Personal Information**

#### Home Page (`src/app/page.tsx`):
- Replace "Yogesh" with your name
- Update the bio/tagline
- Modify the quick stats (Projects, Years, Skills)
- Update social links (GitHub, LinkedIn, Twitter, Email)

```typescript
<h1 className="text-6xl font-bold mb-4 text-white">Your Name</h1>
<p className="text-2xl text-gray-400 mb-6">Your Title/Tagline</p>
<p className="text-lg text-gray-300 max-w-2xl mb-12 leading-relaxed">
  Your bio text here...
</p>
```

#### Navigation (`src/components/Navigation.tsx`):
- Update the logo text (currently "Y")
- Modify navigation links if needed

### 2. **Add Your Projects**

Edit `src/app/projects/page.tsx`:

Find the `projects` array and update the example projects:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description here',
    technologies: ['React', 'Node.js', 'TailwindCSS'],
    liveLink: 'https://your-live-project.com',
    githubLink: 'https://github.com/yourusername/repo',
  },
  // Add more projects...
]
```

**Fields to update:**
- `title`: Project name
- `description`: What the project does
- `technologies`: Tech stack used
- `liveLink`: URL to live demo
- `githubLink`: GitHub repository link

### 3. **Add Your Work Experience**

Edit `src/app/experience/page.tsx`:

Update the `experiences` array:

```typescript
const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: 'Your Company',
    position: 'Your JobTitle',
    duration: 'Jan 2023 - Present',
    description: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3',
    ],
    technologies: ['React', 'Next.js', 'Node.js'],
  },
  // Add more experiences...
]
```

### 4. **Update Your Education**

Edit `src/app/education/page.tsx`:

Update the `educations` and `certifications` arrays:

```typescript
const educations: EducationItem[] = [
  {
    id: 1,
    institution: 'Your University',
    degree: "Bachelor's Degree",
    field: 'Computer Science',
    duration: '2018 - 2022',
    details: ['Detail 1', 'Detail 2', 'Detail 3'],
  },
]

const certifications: Certification[] = [
  {
    id: 1,
    name: 'Certification Name',
    issuer: 'Issuing Organization',
    date: 'Jun 2024',
    credentialLink: 'https://credential-url.com',
  },
]
```

### 5. **Update Your Skills**

Edit `src/app/skills/page.tsx`:

Update the `skillCategories` array:

```typescript
const skillCategories: SkillCategory[] = [
  {
    id: 1,
    name: 'Frontend Technologies',
    skills: [
      { name: 'React', proficiency: 5 },      // 1-5 scale
      { name: 'Next.js', proficiency: 5 },
      { name: 'Your Skill', proficiency: 4 },
    ],
  },
  // Add more categories...
]
```

### 6. **Update Contact Information**

Edit `src/app/contact/page.tsx`:

Update the `contactInfo` array:

```typescript
const contactInfo = [
  {
    icon: <Mail size={24} />,
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  {
    icon: <Phone size={24} />,
    label: 'Phone',
    value: '+1 (234) 567-8900',
    href: 'tel:+12345678900',
  },
  {
    icon: <MapPin size={24} />,
    label: 'Location',
    value: 'City, Country',
    href: '#',
  },
]

// Update social links
const socialLinks = [
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    href: 'https://github.com/yourusername',
  },
  // ... update other links
]
```

### 7. **Add Profile Photos**

1. Create a `public/images/` directory
2. Add your profile photo as `profile.jpg` or `profile.png`
3. Update the home page to use your image:

```typescript
<img 
  src="/images/profile.jpg" 
  alt="Profile" 
  className="w-32 h-32 rounded-full object-cover"
/>
```

Current placeholder uses an emoji (`👨‍💻`). Replace it with an actual image.

### 8. **Customize Colors**

Edit `tailwind.config.ts` to match your brand:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#0f172a',      // Dark blue - main background
      secondary: '#1e293b',    // Lighter blue - cards
      accent: '#3b82f6',       // Bright blue - highlights
    },
  },
},
```

## 📝 Update the Portfolio Info

Edit `src/app/layout.tsx` to update the metadata:

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Your Title',
  description: 'Your professional portfolio description',
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Select the yogesh-portfolio folder
   - Click Deploy

3. **Configure Domain**:
   - Add your custom domain in Vercel settings
   - Update DNS records

## 📦 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 🔄 Build Process

```bash
npm run build    # Creates optimized production build
npm start        # Runs the production server
```

## 🎨 Design Tips

- **Keep it Clean**: Don't overcomplicate - focus on showcasing your work
- **Use High-Quality Images**: Replace placeholders with professional photos
- **Update Regularly**: Keep projects and experience up to date
- **Test Responsiveness**: Check mobile, tablet, and desktop views
- **Fast Loading**: Optimize images before uploading
- **SEO Friendly**: Update metadata for better search visibility

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Kill the process on port 3000 or use a different port:
npm run dev -- -p 3001
```

### Dependencies Conflict
```bash
# Use legacy peer deps flag:
npm install --legacy-peer-deps
```

### Build Errors
```bash
# Clear cache and reinstall:
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run build
```

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- Mobile phones (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For issues or questions:
- Check the code comments
- Review official Next.js docs: [nextjs.org](https://nextjs.org)
- Check Tailwind docs: [tailwindcss.com](https://tailwindcss.com)

## 🎯 Next Steps

1. ✅ Customize all personal information
2. ✅ Add your projects with live links
3. ✅ Update work experience
4. ✅ Add your education details
5. ✅ List all your technical skills
6. ✅ Add profile photos
7. ✅ Test all pages and links
8. ✅ Deploy to Vercel
9. ✅ Share your portfolio!

---

**Built with ❤️ using Next.js + React + Tailwind CSS**

Happy coding! 🚀
