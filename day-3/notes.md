# Day 03 – React Native Modal (Expo)

## What I Learned Today

Today I learned everything about **Modal in React Native Expo**.  
A Modal is a popup component that appears above the current screen and is used to show important content like alerts, forms, or confirmations.

---

## What is a Modal?

- Modal is a component provided by React Native.
- It opens on top of the current screen.
- The background screen is blocked or dimmed.
- Modal visibility is controlled using **state**.

---

## Why We Use Modal?

- Login / Signup popup
- Confirmation dialog
- Bottom sheet UI
- Alert with custom design

---

## Key Concepts Used

### 1. useState
- `useState` is used to control open and close of the modal.
- `true` → Modal opens
- `false` → Modal closes

Example:
```js
const [visible, setVisible] = useState(false);
