import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchFiltersProps {
  searchTerm: string;
  statusFilter: string;
  skillsFilter: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onSkillsChange: (value: string) => void;
  onClearFilters: () => void;
}

export function SearchFilters({
  searchTerm,
  statusFilter,
  skillsFilter,
  onSearchChange,
  onStatusChange,
  onSkillsChange,
  onClearFilters
}: SearchFiltersProps) {
  return (
    <Card className="border border-gray-200 mb-8">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4">
          {/* Search Input */}
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10"
                placeholder="Search by applicant name..."
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            {/* Status Filter */}
            <Select value={statusFilter} onValueChange={onStatusChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="Applied">Applied</SelectItem>
                <SelectItem value="In Review">In Review</SelectItem>
                <SelectItem value="Selected">Selected</SelectItem>
                <SelectItem value="Rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>

            {/* Skills Filter */}
            <Select value={skillsFilter} onValueChange={onSkillsChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Skills" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Skills</SelectItem>
                <SelectItem value="JavaScript">JavaScript</SelectItem>
                <SelectItem value="React">React</SelectItem>
                <SelectItem value="Python">Python</SelectItem>
                <SelectItem value="Node.js">Node.js</SelectItem>
                <SelectItem value="Java">Java</SelectItem>
                <SelectItem value="UI/UX">UI/UX</SelectItem>
              </SelectContent>
            </Select>

            {/* Clear Filters */}
            <Button
              variant="outline"
              onClick={onClearFilters}
              className="text-gray-600 hover:text-gray-900"
            >
              Clear
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
