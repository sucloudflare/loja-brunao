import React from 'react';
import { AthleteCard } from './AthleteCard';
import { athletes } from '../../data/athletes';

export function AthletesSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Nossos Atletas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {athletes.map((athlete) => (
            <AthleteCard key={athlete.id} {...athlete} />
          ))}
        </div>
      </div>
    </section>
  );
}