import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const PersonalInfoForm = () => (
  <div className="space-y-4">
    <div>
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Enter your name" />
    </div>
    <div>
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  </div>
);

export const AddressForm = () => (
  <div className="space-y-4">
    <div>
      <Label htmlFor="street">Street Address</Label>
      <Input id="street" placeholder="Enter your street address" />
    </div>
    <div>
      <Label htmlFor="city">City</Label>
      <Input id="city" placeholder="Enter your city" />
    </div>
  </div>
);

export const PaymentForm = () => (
  <div className="space-y-4">
    <div>
      <Label htmlFor="cardNumber">Card Number</Label>
      <Input id="cardNumber" placeholder="Enter your card number" />
    </div>
    <div>
      <Label htmlFor="expiryDate">Expiry Date</Label>
      <Input id="expiryDate" placeholder="MM/YY" />
    </div>
  </div>
);

export const ConfirmationForm = () => (
  <div>
    <p>Please review your information and confirm.</p>
  </div>
);
