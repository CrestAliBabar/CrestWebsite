import { Html, Text } from "@react-email/components";
import * as React from "react";

type MessageUsEmailProps = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const MessageUsEmail = ({
  firstName,
  lastName,
  email,
  message,
}: MessageUsEmailProps) => {
  return (
    <Html lang="en">
      <Text>
        Customer Name: {firstName} {lastName}
      </Text>
      <Text>Customer Email: {email}</Text>
      <Text>Customer Message: {message}</Text>
    </Html>
  );
};

export default MessageUsEmail;
