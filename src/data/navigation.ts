export const LOGO_SRC = "/Company_logo_2.png";

export type NavLink = {
  label: string;
  to: string;
};

export const navLinks: NavLink[] = [
{ label: 'Home', to: '/' },
{ label: 'About Us', to: '/about' },
{ label: 'Services', to: '/services' },
{ label: 'Work', to: '/work' },
{ label: 'Contact Us', to: '/contact' }];



// Video data for marquee – using WebM files and generated placeholder posters
export type VideoItem = {
  srcWebm: string;        // WebM video source
  label: string;          // Display label
  poster?: string;        // Optional poster image (WebP)
};

export const videos: VideoItem[] = [
  { srcWebm: '/video_1.webm', label: 'Limewash Application', poster: '/posters/video_1.webp' },
  { srcWebm: '/video_2.webm', label: 'Venetian Plaster', poster: '/posters/video_2.webp' },
  { srcWebm: '/video_3.webm', label: 'Travertine Texture', poster: '/posters/video_3.webp' },
  { srcWebm: '/video_4.webm', label: 'Concrete Effect', poster: '/posters/video_4.webp' },
  { srcWebm: '/video_5.webm', label: 'Marmorino Burnish', poster: '/posters/video_5.webp' },
  { srcWebm: '/video_6.webm', label: 'Mandana Stone', poster: '/posters/video_6.webp' },
  { srcWebm: '/video_7.webm', label: 'Ombre Wall Finish', poster: '/posters/video_7.webp' },
];