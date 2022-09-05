export interface LocalestorageState {
  token?: string;
}

const localstorageKey = "ecommerce";

export function getLocalstorageState() {
  const storeItem = localStorage.getItem(localstorageKey);
  if (!storeItem) {
    return null;
  }
  try {
    return JSON.parse(storeItem) as LocalestorageState;
  } catch (error) {
    console.warn(error);
    return null;
  }
}

export function setLocalstorageState(localestorageState: LocalestorageState) {
  localStorage.setItem(localstorageKey, JSON.stringify(localestorageState));
}

