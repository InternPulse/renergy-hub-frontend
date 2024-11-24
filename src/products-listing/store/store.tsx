import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface Vendor {
  id: string;
  name: string;
}

interface Product {
  id: string;
  name: string;
  vendorId: string;
  categoryId: string;
  price: number;
  stock: number;
}

interface Category {
  id: string;
  name: string;
}

type ProductStore = {
  vendors: Vendor[];
  products: Product[];
  sort:string
  isClicked: boolean
  setIsClicked: (isClicked: boolean) => void
  setSort: (sort: string) => void;
  categories: Category[];
  selectedVendors: Vendor[];
  selectedProducts: Product[];
  selectedCategories: Category[];
  setFilteredProduct: (productId: string) => Promise<void>;
  setFilteredVendor: (vendorId: string) => Promise<void>;
  setFilteredCategory: (categoryId: string) => Promise<void>;
};

export const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      sort:'',
      isClicked: false,
      setIsClicked: (isClicked: boolean) => set({ isClicked }),
      vendors: [
        { id: "all", name: "All Vendors" },
        { id: "ecowatts", name: "EcoWatts" },
        { id: "enpowers", name: "En Powers" },
        { id: "panelsonic", name: "Panelsonic" },
        { id: "solarcreed", name: "Solar Creed" },
        { id: "solarwaves", name: "Solar Waves" },
        { id: "sygnitesuper", name: "Sygnite Super" },
        { id: "nazpowerhouse", name: "Naz Power House" },
        { id: "gregcopower", name: "Gregco Power and Energy" },
      ],
        setSort: (sort: string) => set({ sort: sort }),
      products: [
        { id: "all", name: "All Products", vendorId: "all", categoryId: "all", price: 0, stock: 0 },
        { id: "prod-001", name: "EcoWatts Solar Panel 250W", vendorId: "ecowatts", categoryId: "solar-panels", price: 220.99, stock: 40 },
        { id: "prod-002", name: "En Powers Hybrid Inverter 7kW", vendorId: "enpowers", categoryId: "inverters", price: 749.99, stock: 25 },
        { id: "prod-003", name: "Panelsonic Battery 200Ah", vendorId: "panelsonic", categoryId: "batteries", price: 380.50, stock: 30 },
        { id: "prod-004", name: "Solar Creed Charge Controller 60A", vendorId: "solarcreed", categoryId: "charge-controllers", price: 149.99, stock: 20 },
        { id: "prod-005", name: "Solar Waves Roof Mounting Kit", vendorId: "solarwaves", categoryId: "mounting-systems", price: 69.99, stock: 80 },
        { id: "prod-006", name: "Sygnite Super 350W Monocrystalline Panel", vendorId: "sygnitesuper", categoryId: "solar-panels", price: 299.99, stock: 50 },
        { id: "prod-007", name: "Naz PowerHouse Lithium Battery 150Ah", vendorId: "nazpowerhouse", categoryId: "batteries", price: 420.00, stock: 15 },
        { id: "prod-008", name: "Gregco Power Solar Monitoring Kit", vendorId: "gregcopower", categoryId: "monitoring-systems", price: 199.99, stock: 10 }
      ],

      categories: [
        { id: "all", name: "All Categories" },
        { id: "solar-panels", name: "Solar Panels" },
        { id: "inverters", name: "Inverters" },
        { id: "batteries", name: "Batteries" },
        { id: "charge-controllers", name: "Charge Controllers" },
        { id: "mounting-systems", name: "Mounting Systems" },
        { id: "monitoring-systems", name: "Monitoring Systems" },
      ],

      selectedVendors: [],
      selectedProducts: [],
      selectedCategories: [],

      setFilteredProduct: async (productId: string) => {
        const { products, selectedProducts } = get();
        const product = products.find((p) => p.id === productId);
        if (!product) return;

        set(() => {
          let updatedProducts = [...selectedProducts];

          if (productId === 'all') {
            return { selectedProducts: updatedProducts.length === products.length ? [] : products };
          }

          if (updatedProducts.some((p) => p.id === productId)) {
            updatedProducts = updatedProducts.filter((p) => p.id !== productId && p.id !== 'all');
          } else {
            updatedProducts = [...updatedProducts.filter((p) => p.id !== 'all'), product];
          }

          if (updatedProducts.length === products.length) {
            updatedProducts.push({ id: 'all', name: 'All Products', vendorId: 'all', categoryId: 'all', price: 0, stock: 0 });
          }

          return { selectedProducts: updatedProducts };
        });
      },

      setFilteredVendor: async (vendorId: string) => {
        const { vendors, selectedVendors } = get();
        const vendor = vendors.find((v) => v.id === vendorId);
        if (!vendor) return;

        set(() => {
          let updatedVendors = [...selectedVendors];

          if (vendorId === 'all') {
            return { selectedVendors: updatedVendors.length === vendors.length ? [] : vendors };
          }

          if (updatedVendors.some((v) => v.id === vendorId)) {
            updatedVendors = updatedVendors.filter((v) => v.id !== vendorId && v.id !== 'all');
          } else {
            updatedVendors = [...updatedVendors.filter((v) => v.id !== 'all'), vendor];
          }

          if (updatedVendors.length === vendors.length) {
            updatedVendors.push({ id: 'all', name: 'All Vendors' });
          }

          return { selectedVendors: updatedVendors };
        });
      },

      setFilteredCategory: async (categoryId: string) => {
        const { categories, selectedCategories } = get();
        const category = categories.find((c) => c.id === categoryId);
        if (!category) return;

        set(() => {
          let updatedCategories = [...selectedCategories];

          // Handle the "all" case
          if (categoryId === 'all') {
            return { selectedCategories: updatedCategories.length === categories.length ? [] : categories };
          }

          // Deselect category if already selected
          if (updatedCategories.some((c) => c.id === categoryId)) {
            updatedCategories = updatedCategories.filter((c) => c.id !== categoryId && c.id !== 'all');
          } else {
            updatedCategories = [...updatedCategories.filter((c) => c.id !== 'all'), category];
          }

          // If all categories are selected, include the "all" option
          if (updatedCategories.length === categories.length) {
            updatedCategories.push({ id: 'all', name: 'All Categories' });
          }

          return { selectedCategories: updatedCategories };
        });
      },
    }),
    {
      name: 'product-storage', // Name of the storage item
      storage: createJSONStorage(() => localStorage), // Use localStorage for persistence
    }
  )
); 