import React, { useState } from 'react';
import { AyurvedicForm, PatientData } from '@/components/AyurvedicForm';
import { DietChart } from '@/components/DietChart';
import heroImage from '@/assets/ayurveda-hero.jpg';

const Index = () => {
  const [currentView, setCurrentView] = useState<'form' | 'results'>('form');
  const [patientData, setPatientData] = useState<PatientData | null>(null);

  const handleFormSubmit = (data: PatientData) => {
    setPatientData(data);
    setCurrentView('results');
  };

  const handleBackToForm = () => {
    setCurrentView('form');
    setPatientData(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-wellness-sage/10 to-wellness-mint/10">
      {currentView === 'form' ? (
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="relative mb-8 mx-auto max-w-4xl">
              <img
                src={heroImage}
                alt="Ayurvedic herbs and spices arrangement"
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-[var(--shadow-wellness)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent rounded-2xl flex items-end">
                <div className="p-8 text-primary-foreground">
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Ayurvedic Diet Management</h1>
                  <p className="text-xl opacity-90">Personalized nutrition based on ancient wisdom</p>
                </div>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Discover Your Perfect Diet Plan
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Combining 5000-year-old Ayurvedic principles with modern nutritional science, 
                we create personalized diet charts that balance your doshas, address health conditions, 
                and optimize your well-being through the power of food as medicine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="text-center p-6 bg-card rounded-xl shadow-[var(--shadow-card)]">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground">🌿</span>
                </div>
                <h3 className="font-semibold mb-2">Dosha-Based Recommendations</h3>
                <p className="text-sm text-muted-foreground">Personalized for your Vata, Pitta, Kapha constitution</p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-xl shadow-[var(--shadow-card)]">
                <div className="w-12 h-12 bg-wellness-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">📊</span>
                </div>
                <h3 className="font-semibold mb-2">Nutritional Analysis</h3>
                <p className="text-sm text-muted-foreground">Complete macro and micronutrient breakdown</p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-xl shadow-[var(--shadow-card)]">
                <div className="w-12 h-12 bg-wellness-sage rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🍽️</span>
                </div>
                <h3 className="font-semibold mb-2">Meal Planning</h3>
                <p className="text-sm text-muted-foreground">Complete recipes with cooking instructions</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <AyurvedicForm onSubmit={handleFormSubmit} />
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8">
          <DietChart patientData={patientData!} onBack={handleBackToForm} />
        </div>
      )}
    </div>
  );
};

export default Index;
