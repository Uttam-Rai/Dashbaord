import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUpDown } from "lucide-react";
import { Applicant } from "@shared/schema";

interface ApplicantsTableProps {
  applicants: Applicant[];
  onViewApplicant: (applicant: Applicant) => void;
}

type SortField = 'name' | 'status' | 'appliedDate';
type SortDirection = 'asc' | 'desc';

export function ApplicantsTable({ applicants, onViewApplicant }: ApplicantsTableProps) {
  const [sortField, setSortField] = useState<SortField>('appliedDate');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedApplicants = [...applicants].sort((a, b) => {
    let aValue: string | number;
    let bValue: string | number;

    switch (sortField) {
      case 'name':
        aValue = a.name.toLowerCase();
        bValue = b.name.toLowerCase();
        break;
      case 'status':
        aValue = a.status;
        bValue = b.status;
        break;
      case 'appliedDate':
        aValue = new Date(a.appliedDate).getTime();
        bValue = new Date(b.appliedDate).getTime();
        break;
      default:
        return 0;
    }

    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'Applied':
        return 'secondary';
      case 'In Review':
        return 'default';
      case 'Selected':
        return 'default';
      case 'Rejected':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Applied':
        return 'bg-purple-100 text-purple-800';
      case 'In Review':
        return 'bg-amber-100 text-amber-800';
      case 'Selected':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getAvatarColor = (name: string) => {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-red-500', 'bg-yellow-500', 'bg-indigo-500'];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <Card className="border border-gray-200 overflow-hidden">
      <CardHeader className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h3 className="text-lg font-medium text-gray-900">Applicants</h3>
        <p className="mt-1 text-sm text-gray-600">Manage and review internship applications</p>
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="px-6 py-3">
                  <Button
                    variant="ghost"
                    onClick={() => handleSort('name')}
                    className="flex items-center space-x-1 hover:bg-gray-100 p-0 h-auto font-medium text-xs text-gray-500 uppercase tracking-wider"
                  >
                    <span>Name</span>
                    <ArrowUpDown className="w-4 h-4" />
                  </Button>
                </TableHead>
                <TableHead className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </TableHead>
                <TableHead className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Skills
                </TableHead>
                <TableHead className="px-6 py-3">
                  <Button
                    variant="ghost"
                    onClick={() => handleSort('status')}
                    className="flex items-center space-x-1 hover:bg-gray-100 p-0 h-auto font-medium text-xs text-gray-500 uppercase tracking-wider"
                  >
                    <span>Status</span>
                    <ArrowUpDown className="w-4 h-4" />
                  </Button>
                </TableHead>
                <TableHead className="px-6 py-3">
                  <Button
                    variant="ghost"
                    onClick={() => handleSort('appliedDate')}
                    className="flex items-center space-x-1 hover:bg-gray-100 p-0 h-auto font-medium text-xs text-gray-500 uppercase tracking-wider"
                  >
                    <span>Applied Date</span>
                    <ArrowUpDown className="w-4 h-4" />
                  </Button>
                </TableHead>
                <TableHead className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedApplicants.map((applicant) => (
                <TableRow key={applicant.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <TableCell className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className={`h-10 w-10 rounded-full ${getAvatarColor(applicant.name)} flex items-center justify-center`}>
                          <span className="text-sm font-medium text-white">
                            {getInitials(applicant.name)}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {applicant.name}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{applicant.email}</div>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {applicant.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap">
                    <Badge className={`${getStatusColor(applicant.status)} text-xs font-medium`}>
                      {applicant.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {applicant.appliedDate}
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button
                      variant="ghost"
                      onClick={() => onViewApplicant(applicant)}
                      className="text-blue-600 hover:text-blue-900 mr-3 p-0 h-auto"
                    >
                      View
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => onViewApplicant(applicant)}
                      className="text-gray-600 hover:text-gray-900 p-0 h-auto"
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <Button variant="outline" className="text-gray-700">
              Previous
            </Button>
            <Button variant="outline" className="ml-3 text-gray-700">
              Next
            </Button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">{applicants.length}</span> of <span className="font-medium">{applicants.length}</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                <Button variant="outline" size="sm" className="rounded-l-md">
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-blue-50 text-blue-600 border-blue-300">
                  1
                </Button>
                <Button variant="outline" size="sm" className="rounded-r-md">
                  Next
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
