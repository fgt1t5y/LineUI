export function useComponent(...components) {
  if (!Array.isArray(components) || components.length < 1) {
    return;
  }

  components.forEach((component) => {
    if (typeof component.run !== "function") {
      return;
    }
    component.run();
  });
}
