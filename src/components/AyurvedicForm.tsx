import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';

export interface PatientData {
  age: number;
  gender: string;
  healthConditions: string[];
  lifestyle: {
    dietType: string;
    waterIntake: string;
    sleepPattern: string;
    bowelMovement: string;
    exercise: string;
  };
  mealFrequency: string;
  additionalNotes: string;
}

interface AyurvedicFormProps {
  onSubmit: (data: PatientData) => void;
}

const healthConditionOptions = [
  'Diabetes', 'Obesity', 'Acidity', 'Hypertension', 'Digestive Issues',
  'High Cholesterol', 'Anxiety/Stress', 'Arthritis', 'Constipation',
  'Insomnia', 'Skin Issues', 'Low Energy', 'Other'
];

export const AyurvedicForm: React.FC<AyurvedicFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<PatientData>({
    age: 30,
    gender: '',
    healthConditions: [],
    lifestyle: {
      dietType: '',
      waterIntake: '',
      sleepPattern: '',
      bowelMovement: '',
      exercise: ''
    },
    mealFrequency: '',
    additionalNotes: ''
  });

  const handleConditionChange = (condition: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      healthConditions: checked
        ? [...prev.healthConditions, condition]
        : prev.healthConditions.filter(c => c !== condition)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="max-w-2xl mx-auto shadow-[var(--shadow-wellness)]">
      <CardHeader className="text-center bg-gradient-to-r from-primary to-wellness-saffron text-primary-foreground rounded-t-lg">
        <CardTitle className="text-2xl font-bold">Patient Assessment</CardTitle>
        <CardDescription className="text-primary-foreground/90">
          Please provide your details for personalized Ayurvedic diet recommendations
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                value={formData.age}
                onChange={(e) => setFormData(prev => ({ ...prev, age: parseInt(e.target.value) }))}
                min="1"
                max="120"
                required
              />
            </div>
            <div>
              <Label htmlFor="gender">Gender</Label>
              <Select value={formData.gender} onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Health Conditions */}
          <div>
            <Label className="text-base font-semibold">Health Conditions</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
              {healthConditionOptions.map((condition) => (
                <div key={condition} className="flex items-center space-x-2">
                  <Checkbox
                    id={condition}
                    checked={formData.healthConditions.includes(condition)}
                    onCheckedChange={(checked) => handleConditionChange(condition, checked as boolean)}
                  />
                  <Label htmlFor={condition} className="text-sm">{condition}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Lifestyle Habits */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Lifestyle Habits</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Diet Type</Label>
                <Select value={formData.lifestyle.dietType} onValueChange={(value) => 
                  setFormData(prev => ({ ...prev, lifestyle: { ...prev.lifestyle, dietType: value } }))
                }>
                  <SelectTrigger>
                    <SelectValue placeholder="Select diet type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vegetarian">Vegetarian</SelectItem>
                    <SelectItem value="non-vegetarian">Non-Vegetarian</SelectItem>
                    <SelectItem value="vegan">Vegan</SelectItem>
                    <SelectItem value="eggetarian">Eggetarian</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Water Intake (glasses/day)</Label>
                <Select value={formData.lifestyle.waterIntake} onValueChange={(value) => 
                  setFormData(prev => ({ ...prev, lifestyle: { ...prev.lifestyle, waterIntake: value } }))
                }>
                  <SelectTrigger>
                    <SelectValue placeholder="Select water intake" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="less-than-4">Less than 4 glasses</SelectItem>
                    <SelectItem value="4-6">4-6 glasses</SelectItem>
                    <SelectItem value="6-8">6-8 glasses</SelectItem>
                    <SelectItem value="more-than-8">More than 8 glasses</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Sleep Pattern</Label>
                <Select value={formData.lifestyle.sleepPattern} onValueChange={(value) => 
                  setFormData(prev => ({ ...prev, lifestyle: { ...prev.lifestyle, sleepPattern: value } }))
                }>
                  <SelectTrigger>
                    <SelectValue placeholder="Select sleep pattern" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="regular-8hrs">Regular 7-8 hours</SelectItem>
                    <SelectItem value="irregular">Irregular schedule</SelectItem>
                    <SelectItem value="less-than-6">Less than 6 hours</SelectItem>
                    <SelectItem value="disturbed">Disturbed sleep</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Exercise Routine</Label>
                <Select value={formData.lifestyle.exercise} onValueChange={(value) => 
                  setFormData(prev => ({ ...prev, lifestyle: { ...prev.lifestyle, exercise: value } }))
                }>
                  <SelectTrigger>
                    <SelectValue placeholder="Select exercise level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedentary">Sedentary/No exercise</SelectItem>
                    <SelectItem value="light">Light exercise (1-2 times/week)</SelectItem>
                    <SelectItem value="moderate">Moderate (3-4 times/week)</SelectItem>
                    <SelectItem value="active">Very active (5+ times/week)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label>Bowel Movement</Label>
              <Select value={formData.lifestyle.bowelMovement} onValueChange={(value) => 
                setFormData(prev => ({ ...prev, lifestyle: { ...prev.lifestyle, bowelMovement: value } }))
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Select bowel movement pattern" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="regular">Regular (once daily)</SelectItem>
                  <SelectItem value="irregular">Irregular</SelectItem>
                  <SelectItem value="constipated">Constipated</SelectItem>
                  <SelectItem value="loose">Frequent/Loose</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Meal Frequency */}
          <div>
            <Label>Preferred Meal Frequency</Label>
            <Select value={formData.mealFrequency} onValueChange={(value) => setFormData(prev => ({ ...prev, mealFrequency: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select meal frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3-meals">3 meals/day</SelectItem>
                <SelectItem value="5-meals">5 small meals/day</SelectItem>
                <SelectItem value="2-meals">2 meals/day (intermittent fasting)</SelectItem>
                <SelectItem value="flexible">Flexible timing</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Additional Notes */}
          <div>
            <Label htmlFor="notes">Additional Notes (Optional)</Label>
            <Textarea
              id="notes"
              placeholder="Any specific concerns, allergies, or preferences..."
              value={formData.additionalNotes}
              onChange={(e) => setFormData(prev => ({ ...prev, additionalNotes: e.target.value }))}
              rows={3}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-primary to-wellness-saffron hover:opacity-90 transition-[var(--transition-smooth)]"
            size="lg"
          >
            Generate Ayurvedic Diet Plan
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};