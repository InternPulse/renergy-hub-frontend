// import React from 'react'

import Button from ".././Components/Button";

interface ProductProperty {
    Product: {
            imageUrl: string;
            // altText: string;
    };
    'Primary Function' : string;
    'Best Applications' : string;
    'Ideal Locations' : string;
    'Output Variability' : string;
    'Installation Complexity' : string;
    
}

const productProperties: ProductProperty[] = [
    {
        Product: {
            imageUrl: 'Monocrystalline.png',
            // altText: 'Solar Panel image'
        },
        'Primary Function': 'Convert sunlight into electricity',
        'Best Applications': 'Residential, commercial, utility-scale',
        'Ideal Locations': 'Areas with high solar irradiance',
        'Output Variability': 'Daytime, weather-dependent',
        'Installation Complexity': 'Moderate (rooftop or ground-mounted)'
    },
    {
        Product: {
            imageUrl: 'String inverter.png',
        },
        'Primary Function': 'Store electricity for later use',
        'Best Applications': 'Backup power, grid balancing renewable intergration',
        'Ideal Locations': 'Near energy generation sources or demand centers',
        'Output Variability': 'Controlled dispatchable',
        'Installation Complexity': 'Moderate (depends on the storage type)'
    },
    {
        Product: {
            imageUrl: 'Horizontal-axis turbines.png',
            // altText: 'Solar Panel image'
        },
        'Primary Function': 'Convert wind into electricity',
        'Best Applications': 'Utility-scale, off-grid, rural areas',
        'Ideal Locations': 'Coastal, open plains, high wind areas',
        'Output Variability': 'Wind speed-dependent',
        'Installation Complexity': 'Moderate (depends on the storage type)'
    },
];

// productProperties table 


const ProductPropertiesTable: React.FC = () => {
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Product Properties</h2>
        <div className="overflow-x-auto">
            <table className="w-full table-auto border border-black">
                <thead>
                    <tr className="border-b border-black">
                        <th className="px-4 py-2 text-left  border-r border-black">Product</th>
                        <th className="px-4 py-2 text-left  border-r border-black">Primary Functions</th>
                        <th className="px-4 py-2 text-left  border-r border-black">Best Applications</th>
                        <th className="px-4 py-2 text-left  border-r border-black">Ideal Locations</th>
                        <th className="px-4 py-2 text-left  border-r border-black">Output Variability</th>
                        <th className="px-4 py-2 text-left">Installation Complexity</th>
                    </tr>
                </thead>
                <tbody>
                    {productProperties.map((property, index) => (
                        <tr key={index} className="border-b border-black">
                            <td className="px-4 py-2  border-r border-black">
                            <div className="flex items-center">
                                <img src={property.Product.imageUrl} className="w-25 h-25 object-cover" />
                            </div>
                            </td>
                            <td className="px-4 py-2 border-r border-black">{property['Primary Function']}</td>
                            <td className="px-4 py-2 border-r border-black">{property['Best Applications']}</td>
                            <td className="px-4 py-2 border-r border-black">{property['Ideal Locations']}</td>
                            <td className="px-4 py-2 border-r border-black">{property['Output Variability']}</td>
                            <td className="px-4 py-2">{property['Installation Complexity']}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
            <Button label="Explore " styleClass="mt-4 bg-green-500 hover:bg-green-700 text-white py-2 px-20 rounded" />
        </div>
    </div>
  )
}

export default ProductPropertiesTable;