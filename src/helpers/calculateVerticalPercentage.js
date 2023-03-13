export function calculateVerticalPercentage(bounds, threshold = 0, root = window) {
  if (!root) return 0;
  const vh = (root instanceof Element ? root.clientHeight : root.innerHeight) || 0;
  const offset = threshold * bounds.height;
  const percentage = (bounds.bottom - offset) / (vh + bounds.height - offset * 2);

  return 1 - Math.max(0, Math.min(1, percentage));
}
