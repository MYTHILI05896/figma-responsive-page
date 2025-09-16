import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-primary text-white text-center py-5">
      <div className="container">
        <h1 className="display-4 fw-bold">Welcome to MyGroups</h1>
        <p className="lead mt-3">
          Discover and connect with amazing groups around the world.
        </p>
        <button className="btn btn-light btn-lg mt-4">Get Started</button>
      </div>
    </section>
  );
}
