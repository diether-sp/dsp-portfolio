import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AboutItem {
  emoji: string;
  title: string;
  description: string;
}

interface AboutSection {
  key: string;
  heading: string;
  items: AboutItem[];
}

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  openSection = signal<string | null>(null);

  toggleSection(key: string) {
    this.openSection.set(this.openSection() === key ? null : key);
  }

  isSectionOpen(key: string): boolean {
    return this.openSection() === key;
  }

  sections: AboutSection[] = [
    {
      key: 'hobbies',
      heading: '🎯 My Hobbies',
      items: [
        {
          emoji: '🎮',
          title: 'Gaming',
          description: 'Passionate about strategic games and immersive gaming experiences. Love exploring game mechanics and design.'
        },
        {
          emoji: '🎬',
          title: 'Movies, Series, & Anime',
          description: 'Binge-watching good movies, series or anime. Appreciate storytelling and cinematography.'
        },
        {
          emoji: '🎵',
          title: 'Music',
          description: 'Listening to various genres, from lo-fi to classical. Music sets the mood for everything.'
        }
      ]
    },
    {
      key: 'passions',
      heading: '❤️ What I\'m Passionate About',
      items: [
        {
          emoji: '⚙️',
          title: 'Clean Code',
          description: 'Obsessed with writing maintainable, scalable code that others can understand and extend.'
        },
        {
          emoji: '🚀',
          title: 'Innovation',
          description: 'Constantly exploring new technologies and methodologies to solve problems efficiently.'
        },
        {
          emoji: '👥',
          title: 'Mentorship',
          description: 'Passionate about helping team members grow and sharing knowledge to build stronger teams.'
        },
        {
          emoji: '🔍',
          title: 'Problem Solving',
          description: 'Enjoy diving deep into complex challenges and finding elegant solutions.'
        }
      ]
    },
    {
      key: 'afk',
      heading: '⏰ When I\'m AFK',
      items: [
        {
          emoji: '🌍',
          title: 'Travel',
          description: 'Exploring new places, meeting people, and experiencing different cultures and perspectives.'
        },
        {
          emoji: '🌿',
          title: 'Nature Time',
          description: 'Relaxing outdoors, enjoying fresh air, plants, or natural scenery.'
        },
        {
          emoji: '🚶',
          title: 'Walking',
          description: 'Taking short or long walks to stretch, think, or enjoy surroundings.'
        },
        {
          emoji: '🏅',
          title: 'Sports & Outdoor Games',
          description: 'Playing sports like basketball, pickleball, and golf to stay active, socialize, and enjoy both casual and competitive outdoor recreation.'
        },
        {
          emoji: '🍳',
          title: 'Cooking',
          description: 'Preparing meals, trying recipes, or experimenting with food.'
        },
        {
          emoji: '☕',
          title: 'Coffee & Conversation',
          description: 'Love having meaningful conversations over a good cup of coffee. Ideas flow best this way.'
        }
      ]
    }
  ];
}