"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // Check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Navigation */}
      <nav className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <h1
            className="text-2xl font-bold"
            style={{ color: "var(--foreground)" }}
          >
            Erin Fox
          </h1>
          <div className="flex items-center space-x-6">
            <a
              href="#about"
              className="transition-colors hover:opacity-75"
              style={{ color: "var(--army-sage)" }}
            >
              About
            </a>
            <a
              href="#blog"
              className="transition-colors hover:opacity-75"
              style={{ color: "var(--army-sage)" }}
            >
              Blog
            </a>
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg border hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
              style={{
                borderColor: "var(--army-sage)",
                backgroundColor: "transparent",
              }}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-700 dark:text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="mb-16">
          <h2
            className="text-6xl sm:text-8xl font-bold mb-8 leading-tight"
            style={{ color: "var(--hero-heading)" }}
          >
            Hi, I'm Erin.
          </h2>
          <p
            className="text-xl mb-8 max-w-2xl"
            style={{ color: "var(--foreground)" }}
          >
            Full Stack software engineer with experience building and
            maintaining user-facing features across web platforms. I'm
            passionate about explaining things simple, metaphors, and cats. Ask
            me about my sourdough starter.
          </p>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16">
          <div
            className="border p-8 rounded-lg"
            style={{ borderColor: "var(--army-sage)" }}
          >
            <h3
              className="text-3xl font-bold mb-6"
              style={{ color: "var(--section-heading)" }}
            >
              About
            </h3>
            <div className="space-y-4" style={{ color: "var(--foreground)" }}>
              <p>Based in the Bay Area, CA</p>
              <p>Full Stack Software Engineer</p>
              <p>
                Conference speaker - React Advanced, Tech Lead Conf, etc (more{" "}
                <a
                  href="https://github.com/erinfox/talks"
                  className="transition-colors hover:opacity-75"
                  style={{ color: "var(--army-sage)" }}
                >
                  here
                </a>
                .)
              </p>
              <p>
                Strong communicator and collaborator, bringing clarity to
                complex projects.
              </p>
            </div>
          </div>
        </section>

        {/* Current Stack */}
        <section className="mb-16">
          <h3
            className="text-3xl font-bold mb-6"
            style={{ color: "var(--section-heading)" }}
          >
            Current Stack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              className="border p-6 rounded-lg"
              style={{ borderColor: "var(--army-sage)" }}
            >
              <h4
                className="text-xl font-semibold mb-4"
                style={{ color: "var(--section-heading)" }}
              >
                Frontend
              </h4>
              <p style={{ color: "var(--foreground)" }}>
                JavaScript, React, React Native, GraphQL
              </p>
            </div>
            <div
              className="border p-6 rounded-lg"
              style={{ borderColor: "var(--army-sage)" }}
            >
              <h4
                className="text-xl font-semibold mb-4"
                style={{ color: "var(--section-heading)" }}
              >
                Backend
              </h4>
              <p style={{ color: "var(--foreground)" }}>
                Ruby on Rails, API Development
              </p>
            </div>
            <div
              className="border p-6 rounded-lg"
              style={{ borderColor: "var(--army-sage)" }}
            >
              <h4
                className="text-xl font-semibold mb-4"
                style={{ color: "var(--section-heading)" }}
              >
                Testing & Tools
              </h4>
              <p style={{ color: "var(--foreground)" }}>
                Jest, React Testing Library, RSpec, Git, GitHub, OpenAI/Claude
                Code
              </p>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="mb-16">
          <h3
            className="text-3xl font-bold mb-6"
            style={{ color: "var(--section-heading)" }}
          >
            Posts
          </h3>
          <div
            className="border p-8 rounded-lg text-center"
            style={{ borderColor: "var(--army-sage)" }}
          >
            <p style={{ color: "var(--foreground)", opacity: "0.75" }}>
              Blog coming soon...
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/erinfox"
            className="transition-colors hover:opacity-75"
            style={{ color: "var(--army-sage)" }}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/erinkfox"
            className="transition-colors hover:opacity-75"
            style={{ color: "var(--army-sage)" }}
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/erinfoox"
            className="transition-colors hover:opacity-75"
            style={{ color: "var(--army-sage)" }}
          >
            Twitter/X
          </a>
          <a
            href="https://medium.com/@erinfoox"
            className="transition-colors hover:opacity-75"
            style={{ color: "var(--army-sage)" }}
          >
            Medium
          </a>
          <a
            href="mailto:erinkayfox@gmail.com"
            className="transition-colors hover:opacity-75"
            style={{ color: "var(--army-sage)" }}
          >
            Email
          </a>
        </div>
      </footer>
    </div>
  );
}
