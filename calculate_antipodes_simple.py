#!/usr/bin/env python3
"""
Calculate antipodes by reflecting through origin (0,0,0).
For an ideology at (x, y, z), find the ideology closest to (-x, -y, -z).
"""

import math

# Define ideologies with their 3D coordinates
ideologies = [
    {"name": "Effective Accelerationism", "coords": {"x": 0.3, "y": 0.9, "z": 0.6}},
    {"name": "Crypto-Anarchism", "coords": {"x": -0.9, "y": 0.9, "z": 0.9}},
    {"name": "Decentralized Accelerationism", "coords": {"x": -0.6, "y": 0.9, "z": -0.3}},
    {"name": "Fully Automated Luxury Communism", "coords": {"x": 0.9, "y": 0.9, "z": -0.9}},
    {"name": "Eco-Fascism", "coords": {"x": 0.9, "y": -0.8, "z": -0.9}},
    {"name": "Anarcho-Primitivism", "coords": {"x": -0.9, "y": -0.9, "z": -0.6}},
    {"name": "Degrowth", "coords": {"x": -0.5, "y": -0.7, "z": -0.5}},
    {"name": "Kaczynskism", "coords": {"x": -0.9, "y": -0.9, "z": 0.9}},
    {"name": "Abundance", "coords": {"x": 0.5, "y": 0.8, "z": 0.4}},
    {"name": "u/acc", "coords": {"x": 0.0, "y": 1.0, "z": 0.0}},
    {"name": "Social Democracy", "coords": {"x": 0.4, "y": 0.2, "z": -0.7}},
    {"name": "MAGA", "coords": {"x": 0.6, "y": 0.3, "z": 0.0}},
    {"name": "Progressivism", "coords": {"x": 0.2, "y": -0.3, "z": -0.5}},
    {"name": "Anarcho-Capitalism", "coords": {"x": -0.9, "y": 0.6, "z": 0.9}},
    {"name": "Libertarianism", "coords": {"x": -0.6, "y": 0.4, "z": 0.7}},
    {"name": "Democratic Socialism", "coords": {"x": 0.7, "y": 0.1, "z": -0.8}},
    {"name": "Neoliberalism", "coords": {"x": -0.3, "y": 0.5, "z": 0.5}},
    {"name": "Mutualism", "coords": {"x": -0.7, "y": -0.3, "z": -0.4}},
    {"name": "Market Socialism", "coords": {"x": -0.5, "y": 0.1, "z": -0.5}},
    {"name": "Solarpunk", "coords": {"x": -0.5, "y": 0.3, "z": -0.4}},
    {"name": "Ordoliberalism", "coords": {"x": 0.2, "y": 0.3, "z": 0.2}},
    {"name": "Georgism", "coords": {"x": -0.2, "y": 0.1, "z": 0.0}},
    {"name": "Marxist-Leninism", "coords": {"x": 0.8, "y": 0.5, "z": -0.8}},
    {"name": "Maoism", "coords": {"x": 0.9, "y": -0.2, "z": -0.9}},
    {"name": "Fascism", "coords": {"x": 0.7, "y": 0.5, "z": -0.4}},
    {"name": "Anarcho-Communism", "coords": {"x": -0.9, "y": -0.3, "z": -0.8}},
    {"name": "Traditionalist Conservatism", "coords": {"x": -0.3, "y": -0.3, "z": 0.6}},
    {"name": "Monarchism", "coords": {"x": 0.9, "y": 0.0, "z": 0.4}},
    {"name": "Neoreaction", "coords": {"x": 0.9, "y": 0.9, "z": 0.5}},
    {"name": "Progressive Conservatism", "coords": {"x": 0.2, "y": -0.1, "z": 0.4}},
]

def reflect_through_origin(coords):
    """Reflect a point through the origin (0, 0, 0)."""
    return {
        "x": -coords["x"],
        "y": -coords["y"],
        "z": -coords["z"]
    }

def euclidean_distance(coords1, coords2):
    """Calculate Euclidean distance between two points."""
    dx = coords1["x"] - coords2["x"]
    dy = coords1["y"] - coords2["y"]
    dz = coords1["z"] - coords2["z"]
    return math.sqrt(dx*dx + dy*dy + dz*dz)

def find_closest_ideology(target_coords, ideologies, exclude_name=None):
    """Find the ideology closest to the target coordinates."""
    min_distance = float('inf')
    closest = None
    
    for ideology in ideologies:
        if exclude_name and ideology["name"] == exclude_name:
            continue
        
        distance = euclidean_distance(target_coords, ideology["coords"])
        if distance < min_distance:
            min_distance = distance
            closest = ideology
    
    return closest, min_distance

def calculate_antipodes(ideologies):
    antipodes = {}
    
    for ideology in ideologies:
        # Calculate the antipodal point (reflection through origin)
        antipodal_point = reflect_through_origin(ideology["coords"])
        
        # Find the closest ideology to this antipodal point
        closest, distance = find_closest_ideology(antipodal_point, ideologies, ideology["name"])
        
        antipodes[ideology["name"]] = closest["name"]
    
    return antipodes

def generate_javascript_object(antipodes):
    """Generate JavaScript object format for the antipodes."""
    lines = ["const antipodes = {"]
    for ideology, antipode in antipodes.items():
        lines.append(f'  "{ideology}": "{antipode}",')
    # Remove trailing comma from last line
    lines[-1] = lines[-1].rstrip(',')
    lines.append("};")
    return "\n".join(lines)

if __name__ == "__main__":
    antipodes = calculate_antipodes(ideologies)
    print(generate_javascript_object(antipodes))
