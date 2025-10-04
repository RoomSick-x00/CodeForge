# Code Forge - Hackathon Landing Page

A high-performance, mobile-friendly landing website for the Code Forge hackathon event hosted by Chaitanya 1.0 in November 2025.

## 🚀 Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Dark Cyber Aesthetic**: Deep charcoal background with glowing red accents
- **Dynamic Background**: Animated canvas particles with floating red digits
- **Glitch Effects**: Eye-catching glitch animation on the hero title
- **Smooth Scrolling**: Smooth navigation between sections
- **Supabase Integration**: Form submissions stored in Supabase database
- **Modern Tech Stack**: Next.js 14, Tailwind CSS, TypeScript

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd code-forge-hackathon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   ```

4. **Set up Supabase database**
   Create a table named `registrations` in your Supabase project:
   ```sql
   create table registrations (
     id uuid primary key default uuid_generate_v4(),
     team_name text,
     members text,
     email text,
     project_idea text,
     created_at timestamptz default now()
   );
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design Features

### Color Scheme
- **Background**: Deep dark gray (#06060a)
- **Accent**: Red (#ff3b3b)
- **Text**: Light gray (#d1d5db)

### Typography
- **Headings**: Orbitron (Google Font)
- **Body**: System sans-serif

### Animations
- Glitch effect on hero title
- Fade-in animations on scroll
- Floating particle background
- Smooth hover transitions

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📋 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page assembly
│   └── globals.css         # Global styles
├── components/
│   ├── DynamicBackground.tsx  # Canvas particle animation
│   ├── Navbar.tsx             # Navigation bar
│   ├── Hero.tsx               # Hero section with glitch
│   ├── About.tsx              # About section
│   ├── Schedule.tsx           # Event schedule
│   ├── Prizes.tsx             # Prizes and awards
│   ├── Rules.tsx              # Rules and guidelines
│   ├── RegisterForm.tsx       # Registration form
│   └── Footer.tsx             # Footer
└── lib/
    └── supabaseClient.ts      # Supabase configuration
```

## 🎯 Sections

1. **Hero**: Glitch title, call-to-action buttons
2. **About**: Event description and highlights
3. **Schedule**: 24-hour event timeline
4. **Prizes**: Awards and recognition
5. **Rules**: Guidelines and code of conduct
6. **Register**: Team registration form
7. **Footer**: Contact info and links

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  'cyber-dark': '#06060a',
  'cyber-red': '#ff3b3b',
  'cyber-gray': '#d1d5db',
}
```

### Content
Edit the content in each component file to match your event details.

### Styling
Modify `src/app/globals.css` for custom animations and effects.

## 📞 Support

For questions or support, contact:
- Email: codeforge@chaitanya.edu
- Phone: +91-9876543210

## 📄 License

This project is created for the Code Forge hackathon event. All rights reserved.

---

Built with ❤️ for the developer community
