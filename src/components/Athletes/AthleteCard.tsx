import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

interface AthleteCardProps {
  name: string;
  image: string;
  description: string;
  instagram: string;
  twitter: string;
}

export function AthleteCard({ name, image, description, instagram, twitter }: AthleteCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-zinc-900">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p className="text-sm text-zinc-300 mb-4">{description}</p>
          <div className="flex gap-4">
            <a href={instagram} className="text-white hover:text-zinc-300 transition-colors">
              <Instagram size={24} />
            </a>
            <a href={twitter} className="text-white hover:text-zinc-300 transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}