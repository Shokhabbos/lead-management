import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Lead } from "@/services/types/lead";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LeadModalProps {
  lead: Lead;
  isOpen: boolean;
  onClose: () => void;
  onStatusUpdate: (leadId: number, status: Lead['status']) => void;
}

const statusColors = {
  yangi: "bg-blue-100 hover:bg-blue-200 text-blue-800",
  jarayonda: "bg-yellow-100 hover:bg-yellow-200 text-yellow-800",
  bajarilgan: "bg-green-100 hover:bg-green-200 text-green-800",
};

export function LeadModal({ lead, isOpen, onClose, onStatusUpdate }: LeadModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Lead ma'lumotlari</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <h3 className="font-medium">Ism</h3>
            <p className="text-sm text-muted-foreground">{lead.name}</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Email</h3>
            <p className="text-sm text-muted-foreground">{lead.email}</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Telefon</h3>
            <p className="text-sm text-muted-foreground">{lead.phone}</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Status</h3>
            <div className="flex gap-2">
              {Object.entries(statusColors).map(([status, colorClass]) => (
                <Button
                  key={status}
                  variant="outline"
                  className={cn(
                    "flex-1",
                    colorClass,
                    lead.status === status && "ring-2 ring-primary"
                  )}
                  onClick={() => {
                    onStatusUpdate(lead.id, status as Lead['status']);
                    onClose();
                  }}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 