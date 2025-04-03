import React from "react";
import { Card, Typography, Button, Box } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";


const Donate = () => {
  const accountDetails = {
    bankName: "Axis Bank",
    accountNumber: " 923020002485920",
    ifsc: "UTIB0001497",
    Bankacccountername: "Diya Helping Hands Charitable Trust",
    Branach:"Masabtank",
  };

  const copyToClipboard = () => {
    const details = `Bank: ${accountDetails.bankName}\nAccount No: ${accountDetails.accountNumber}\nIFSC: ${accountDetails.ifsc}\nUPI: ${accountDetails.Bankacccountername}`;
    navigator.clipboard.writeText(details);
    alert("Bank details copied!");
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" p={4}>
      <Card sx={{ maxWidth: 400, p: 3, textAlign: "center", boxShadow: 3, borderRadius: 3 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Support Diya Helping Hands Charitable Trust
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Your donation helps us spread love, kindness, and hope.
        </Typography>
        <Box bgcolor="#f5f5f5" p={2} borderRadius={2} textAlign="left">
          <Typography><strong>Bank Name:</strong> {accountDetails.bankName}</Typography>
          <Typography><strong>Account No:</strong> {accountDetails.accountNumber}</Typography>
          <Typography><strong>IFSC Code:</strong> {accountDetails.ifsc}</Typography>
          <Typography><strong>Account Holder Name:</strong> {accountDetails.Bankacccountername}</Typography>
        </Box>
        <Box mt={3} display="flex" justifyContent="center" gap={2}>
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<ContentCopyIcon />} 
            onClick={copyToClipboard}
          >
            Copy Details
          </Button>
    
        </Box>
      </Card>
    </Box>
  );
};

export default Donate;
