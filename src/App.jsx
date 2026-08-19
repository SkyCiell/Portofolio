import React, { useState, useEffect } from 'react';

import MainLayout from './layouts/MainLayout';
import Navbar from './components/Navbar';
import ProfileSidebar from './components/ProfileSidebar';
import ReadmeSection from './components/ReadmeSection';
import ActivityGraph from './components/ActivityGraph';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import CertificatesSection from './sections/CertificatesSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import ProjectDetailModal from './components/ProjectDetailModal';
import Toast from './components/Toast';
import { PROFILE } from './data/portfolioData';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    showToast('Copied email: raffi.barzally@gmail.com');
  };

  // Intersection Observer for Tab Active State on Scroll
  useEffect(() => {
    const sections = ['overview', 'projects', 'skills', 'experience', 'certificates', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.3;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            if (sectionId === 'contact') {
              setActiveTab('certificates');
            } else {
              setActiveTab(sectionId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MainLayout>
      {/* GitHub Top Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onCopyEmail={copyEmail}
      />

      {/* Main Two-Column Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Column: Profile Sidebar */}
          <ProfileSidebar onCopyEmail={copyEmail} />

          {/* Right Column: Main Content Stream */}
          <div className="flex-1 w-full space-y-8 min-w-0">
            {/* README Section */}
            <ReadmeSection />

            {/* Developer Activity Graph Visualization */}
            <ActivityGraph />

            {/* Repositories / Projects Section */}
            <ProjectsSection
              searchQuery={searchQuery}
              onSelectProject={setSelectedProject}
            />

            {/* Languages & Tools / Skills Section */}
            <SkillsSection />

            {/* Developer Experience Timeline */}
            <ExperienceSection />

            {/* Verified Certificates */}
            <CertificatesSection />

            {/* Simple Contact Box */}
            <ContactSection onShowToast={showToast} />
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Repository Detail Modal Overlay */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Toast Alert */}
      <Toast message={toastMessage} visible={toastVisible} />
    </MainLayout>
  );
}
