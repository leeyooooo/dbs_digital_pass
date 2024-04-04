"use client"
import React, { useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { Button, Flex, Text, Paper } from "@mantine/core";

const QRScanner = () => {
  const [result, setResult] = useState("");
  const [checkPass, setCheckPass] = useState(false);
  const clickEvent = () => {
    const html5QrCode = new Html5Qrcode("reader");
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      if (decodedText) {
        setResult(decodedText);
        if (decodedText === "https://qr.ioi.tw/zh/") {
          setCheckPass(true);
        }
        html5QrCode
          .stop()
          .then((ignore) => {
            // QR Code scanning is stopped.
          })
          .catch((err) => {
            // Stop failed, handle it.
          });
      }
    };
    const config = { fps: 10, qrbox: { width: 300, height: 300 } };

    // If you want to prefer front camera
    html5QrCode.start({ facingMode: "user" }, config, qrCodeSuccessCallback);
  };

  return (
    <Flex mih={50} gap="md" justify="center" align="center" direction="column">
      <Paper shadow="xs" withBorder p="xl">
        <Text>Paper is the most basic ui component</Text>
        <Text>
          Use it to create cards, dropdowns, modals and other components that
          require background with shadow
        </Text>
      </Paper>
      <Paper shadow="xs" withBorder p="xl">
        <Text>Paper is the most basic ui component</Text>
        <Text>
          Use it to create cards, dropdowns, modals and other components that
          require background with shadow
        </Text>
      </Paper>
      <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="column"
      >
        <Button onClick={clickEvent}>btn</Button>
        <span>{checkPass ? "checked" : ""}</span>
        <div id="reader"></div>
        <p>{result}</p>
      </Flex>
    </Flex>
  );
};

export default QRScanner;
