import { useState, useMemo } from "react";
import { StatsCards } from "@/components/stats-cards";
import { SearchFilters } from "@/components/search-filters";
import { ApplicantsTable } from "@/components/applicants-table";
import { ApplicantModal } from "@/components/applicant-modal";
import { mockApplicants, mockStats } from "@/lib/mock-data";
import { Applicant } from "@shared/schema";

export default function Dashboard() {
  const [applicants, setApplicants] = useState(mockApplicants);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [skillsFilter, setSkillsFilter] = useState('all');
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter applicants based on search and filters
  const filteredApplicants = useMemo(() => {
    return applicants.filter((applicant) => {
      const matchesSearch = applicant.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || applicant.status === statusFilter;
      const matchesSkills = skillsFilter === 'all' || applicant.skills.includes(skillsFilter);
      
      return matchesSearch && matchesStatus && matchesSkills;
    });
  }, [applicants, searchTerm, statusFilter, skillsFilter]);

  // Calculate stats based on current applicants
  const stats = useMemo(() => {
    const filtered = filteredApplicants;
    return {
      total: filtered.length,
      inReview: filtered.filter(a => a.status === 'In Review').length,
      selected: filtered.filter(a => a.status === 'Selected').length,
      rejected: filtered.filter(a => a.status === 'Rejected').length
    };
  }, [filteredApplicants]);

  const handleClearFilters = () => {
    setSearchTerm('');
    setStatusFilter('all');
    setSkillsFilter('all');
  };

  const handleViewApplicant = (applicant: Applicant) => {
    setSelectedApplicant(applicant);
    setIsModalOpen(true);
  };

  const handleSaveApplicant = (updatedApplicant: Applicant) => {
    setApplicants(prev => 
      prev.map(applicant => 
        applicant.id === updatedApplicant.id ? updatedApplicant : applicant
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-semibold text-gray-900">Internship Tracker</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>Admin Dashboard</span>
              </div>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">A</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StatsCards stats={stats} />
        
        <SearchFilters
          searchTerm={searchTerm}
          statusFilter={statusFilter}
          skillsFilter={skillsFilter}
          onSearchChange={setSearchTerm}
          onStatusChange={setStatusFilter}
          onSkillsChange={setSkillsFilter}
          onClearFilters={handleClearFilters}
        />

        <ApplicantsTable
          applicants={filteredApplicants}
          onViewApplicant={handleViewApplicant}
        />
      </main>

      <ApplicantModal
        applicant={selectedApplicant}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedApplicant(null);
        }}
        onSave={handleSaveApplicant}
      />
    </div>
  );
}
