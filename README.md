# 🚀 Mars Rover CLI Simulator

A command-line Mars Rover simulator built with **JavaScript** and **Jest**.

This project demonstrates clean command parsing, input validation, grid-based movement, boundary handling, and testable business logic.

---

## 🧭 Problem Definition

NASA has deployed robotic rovers on a rectangular plateau on Mars.

Each rover has:

- An initial position: `X Y Direction`
- A set of movement instructions: `L`, `R`, and `M`

The rover must process each instruction and return its final position.

### Direction values

| Direction | Meaning |
|---|---|
| `N` | North |
| `E` | East |
| `S` | South |
| `W` | West |

### Instruction values

| Command | Meaning |
|---|---|
| `L` | Rotate 90° left |
| `R` | Rotate 90° right |
| `M` | Move forward one grid point |

---

## ✨ Features

- 🖥️ Interactive CLI input
- 📄 File/stdin input support
- 🧭 Multiple rover support
- ✅ Plateau validation
- ✅ Landing position validation
- ✅ Movement instruction validation
- 🧱 Boundary protection
- 🧪 Jest unit tests
- 🔍 Optional movement tracing

---

## 📦 Tech Stack

- JavaScript
- Node.js
- Jest
- Yarn

---

## 📁 Project Structure

```txt
mars-rover-cli/
  test-inputs/
    input.txt
  tests/
    move.test.js
    parseInput.test.js
    validation.test.js
  moveRovers.js
  parseInput.js
  readInput.js
  rover.js
  validation.js
  package.json
