import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { Applicant } from "@shared/schema";

interface ApplicantModalProps {
  applicant: Applicant | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (applicant: Applicant) => void;
}

export function ApplicantModal({ applicant, isOpen, onClose, onSave }: ApplicantModalProps) {
  const [status, setStatus] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (applicant) {
      setStatus(applicant.status);
      setNotes(applicant.notes || '');
    }
  }, [applicant]);

  const handleSave = () => {
    if (!applicant) return;
    
    const updatedApplicant: Applicant = {
      ...applicant,
      status,
      notes
    };
    
    onSave(updatedApplicant);
    onClose();
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getAvatarColor = (name: string) => {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-red-500', 'bg-yellow-500', 'bg-indigo-500'];
    const index = name.length % colors.length;
    return colors[index];
  };

  if (!applicant) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-medium text-gray-900">
              Applicant Details
            </DialogTitle>
          </div>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Applicant Info */}
          <div className="flex items-center space-x-4">
            <div className={`h-16 w-16 rounded-full ${getAvatarColor(applicant.name)} flex items-center justify-center`}>
              <span className="text-xl font-medium text-white">
                {getInitials(applicant.name)}
              </span>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900">{applicant.name}</h4>
              <p className="text-sm text-gray-600">{applicant.email}</p>
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Applied">Applied</SelectItem>
                <SelectItem value="In Review">In Review</SelectItem>
                <SelectItem value="Selected">Selected</SelectItem>
                <SelectItem value="Rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
            <div className="flex flex-wrap gap-2">
              {applicant.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-800">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Applied Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Applied Date</label>
            <p className="text-sm text-gray-900">
              {new Date(applicant.appliedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full"
              rows={3}
              placeholder="Add notes about this applicant..."
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button onClick={handleSave}>
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
