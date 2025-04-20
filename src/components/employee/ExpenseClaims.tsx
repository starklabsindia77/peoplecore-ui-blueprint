
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Upload, 
  Plus, 
  FileText, 
  Check, 
  Clock, 
  X, 
  AlertCircle,
  Download
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";

interface ExpenseClaim {
  id: string;
  date: string;
  amount: number;
  description: string;
  category: string;
  status: "approved" | "pending" | "rejected";
  receipt?: string;
}

// Mock data
const expenseData: ExpenseClaim[] = [
  {
    id: "EXP-001",
    date: "2025-04-15",
    amount: 125.75,
    description: "Client lunch meeting",
    category: "Meals",
    status: "approved",
  },
  {
    id: "EXP-002",
    date: "2025-04-10",
    amount: 450.00,
    description: "Software subscription",
    category: "Software",
    status: "pending",
  },
  {
    id: "EXP-003",
    date: "2025-03-28",
    amount: 85.30,
    description: "Office supplies",
    category: "Supplies",
    status: "rejected",
  },
  {
    id: "EXP-004",
    date: "2025-03-20",
    amount: 235.50,
    description: "Travel to client site",
    category: "Travel",
    status: "approved",
  },
];

export function ExpenseClaims() {
  const { toast } = useToast();
  const [receipts, setReceipts] = useState<File[]>([]);
  const [newExpense, setNewExpense] = useState({
    date: format(new Date(), "yyyy-MM-dd"),
    amount: "",
    description: "",
    category: "",
  });
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setReceipts(Array.from(files));
      toast({
        title: "Receipt Uploaded",
        description: `${files.length} file(s) uploaded successfully.`,
      });
    }
  };

  const handleSubmitExpense = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newExpense.amount || !newExpense.description || !newExpense.category) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    if (receipts.length === 0) {
      toast({
        title: "Receipt Required",
        description: "Please upload at least one receipt.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Expense Submitted",
      description: "Your expense claim has been submitted for approval.",
    });
    
    // Reset form
    setNewExpense({
      date: format(new Date(), "yyyy-MM-dd"),
      amount: "",
      description: "",
      category: "",
    });
    setReceipts([]);
    setDialogOpen(false);
  };
  
  const renderStatusBadge = (status: ExpenseClaim["status"]) => {
    const statusConfig = {
      approved: { icon: Check, className: "bg-green-100 text-green-700" },
      pending: { icon: Clock, className: "bg-amber-100 text-amber-700" },
      rejected: { icon: X, className: "bg-red-100 text-red-700" },
    };
    
    const { icon: Icon, className } = statusConfig[status];
    
    return (
      <div className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${className}`}>
        <Icon className="h-3 w-3 mr-1" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Expense Claims</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Expense
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Submit New Expense</DialogTitle>
              <DialogDescription>
                Fill in the details and upload your receipt to submit a new expense claim.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmitExpense} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input 
                    id="date" 
                    type="date" 
                    value={newExpense.date}
                    onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount ($)</Label>
                  <Input 
                    id="amount" 
                    type="number" 
                    placeholder="0.00" 
                    value={newExpense.amount}
                    onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
                    required 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select 
                  value={newExpense.category}
                  onValueChange={(value) => setNewExpense({ ...newExpense, category: value })}
                  required
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Travel">Travel</SelectItem>
                    <SelectItem value="Meals">Meals & Entertainment</SelectItem>
                    <SelectItem value="Software">Software & Subscriptions</SelectItem>
                    <SelectItem value="Supplies">Office Supplies</SelectItem>
                    <SelectItem value="Training">Training & Development</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Provide details about this expense..."
                  value={newExpense.description}
                  onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="receipt">Upload Receipt</Label>
                <div className="border border-dashed rounded-md p-4 text-center cursor-pointer">
                  <input
                    type="file"
                    id="receipt"
                    className="sr-only"
                    accept="image/*,.pdf"
                    onChange={handleFileUpload}
                    multiple
                  />
                  <label htmlFor="receipt" className="cursor-pointer">
                    <div className="flex flex-col items-center space-y-2">
                      <Upload className="h-6 w-6 text-gray-400" />
                      <span className="text-sm font-medium">Drop files or click to upload</span>
                      <span className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</span>
                    </div>
                  </label>
                </div>
                {receipts.length > 0 && (
                  <div className="mt-2">
                    <p className="text-sm font-medium">Uploaded ({receipts.length}):</p>
                    <ul className="text-sm text-gray-500">
                      {receipts.map((file, index) => (
                        <li key={index} className="truncate">{file.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <DialogFooter>
                <Button type="submit">Submit Expense</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Expenses</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {expenseData.map((expense) => (
                    <TableRow key={expense.id}>
                      <TableCell className="font-medium">{expense.id}</TableCell>
                      <TableCell>{expense.date}</TableCell>
                      <TableCell>{expense.category}</TableCell>
                      <TableCell className="max-w-[200px] truncate">{expense.description}</TableCell>
                      <TableCell>${expense.amount.toFixed(2)}</TableCell>
                      <TableCell>{renderStatusBadge(expense.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <FileText className="h-4 w-4" />
                            <span className="sr-only">View Details</span>
                          </Button>
                          {expense.receipt && (
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Download className="h-4 w-4" />
                              <span className="sr-only">Download Receipt</span>
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="pending" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {expenseData
                    .filter(expense => expense.status === "pending")
                    .map((expense) => (
                    <TableRow key={expense.id}>
                      <TableCell className="font-medium">{expense.id}</TableCell>
                      <TableCell>{expense.date}</TableCell>
                      <TableCell>{expense.category}</TableCell>
                      <TableCell className="max-w-[200px] truncate">{expense.description}</TableCell>
                      <TableCell>${expense.amount.toFixed(2)}</TableCell>
                      <TableCell>{renderStatusBadge(expense.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <FileText className="h-4 w-4" />
                            <span className="sr-only">View Details</span>
                          </Button>
                          {expense.receipt && (
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Download className="h-4 w-4" />
                              <span className="sr-only">Download Receipt</span>
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  {expenseData.filter(expense => expense.status === "pending").length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-6">
                        <p className="text-gray-500">No pending expense claims found</p>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="approved" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {expenseData
                    .filter(expense => expense.status === "approved")
                    .map((expense) => (
                    <TableRow key={expense.id}>
                      <TableCell className="font-medium">{expense.id}</TableCell>
                      <TableCell>{expense.date}</TableCell>
                      <TableCell>{expense.category}</TableCell>
                      <TableCell className="max-w-[200px] truncate">{expense.description}</TableCell>
                      <TableCell>${expense.amount.toFixed(2)}</TableCell>
                      <TableCell>{renderStatusBadge(expense.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <FileText className="h-4 w-4" />
                            <span className="sr-only">View Details</span>
                          </Button>
                          {expense.receipt && (
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Download className="h-4 w-4" />
                              <span className="sr-only">Download Receipt</span>
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  {expenseData.filter(expense => expense.status === "approved").length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-6">
                        <p className="text-gray-500">No approved expense claims found</p>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="rejected" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {expenseData
                    .filter(expense => expense.status === "rejected")
                    .map((expense) => (
                    <TableRow key={expense.id}>
                      <TableCell className="font-medium">{expense.id}</TableCell>
                      <TableCell>{expense.date}</TableCell>
                      <TableCell>{expense.category}</TableCell>
                      <TableCell className="max-w-[200px] truncate">{expense.description}</TableCell>
                      <TableCell>${expense.amount.toFixed(2)}</TableCell>
                      <TableCell>{renderStatusBadge(expense.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <FileText className="h-4 w-4" />
                            <span className="sr-only">View Details</span>
                          </Button>
                          {expense.receipt && (
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Download className="h-4 w-4" />
                              <span className="sr-only">Download Receipt</span>
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  {expenseData.filter(expense => expense.status === "rejected").length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-6">
                        <p className="text-gray-500">No rejected expense claims found</p>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Expense Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-2">
            <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
            <div>
              <h3 className="font-medium">Submission Guidelines</h3>
              <p className="text-sm text-gray-500">
                All expenses must be submitted within 30 days of incurring the expense.
                Receipts are required for all expenses over $25.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
            <div>
              <h3 className="font-medium">Approval Process</h3>
              <p className="text-sm text-gray-500">
                Expenses under $100 are approved by your direct manager.
                Expenses over $100 require approval from department head.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
            <div>
              <h3 className="font-medium">Reimbursement Timeline</h3>
              <p className="text-sm text-gray-500">
                Approved expenses are typically reimbursed within 15 business days through direct deposit.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
