# AI Debugging Prompts

## 2026-07-15

- Goal: add debounced movie search and tighten the Cine-Stream UI flow.
- What I checked: current `Home` fetch path, `Navbar` search wiring, route structure, and favorites context.
- Outcome: moved search state to the app shell, debounced request execution at 500ms, and added localStorage persistence for favorites.
