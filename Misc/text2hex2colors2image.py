from math import ceil
from PIL import Image

def text_to_hex_color_grid_with_mapping(text, cell_size=50, scale_up=True):
    # Pad the text to make it divisible by 3
    while len(text) % 3 != 0:
        print("Not divisible! Padding with space.")
        text += ' '

    # Create triplets and convert to RGB
    triplets = [text[i:i+3] for i in range(0, len(text), 3)]
    colors = [(ord(t[0]), ord(t[1]), ord(t[2])) for t in triplets]
    hex_colors = ['#{:02X}{:02X}{:02X}'.format(*color) for color in colors]

    # Grid size
    grid_width = 3
    grid_height = ceil(len(colors) / grid_width)

    # Set actual cell size based on scaling flag
    pixel_size = cell_size if scale_up else 1
    img = Image.new('RGB', (grid_width * pixel_size, grid_height * pixel_size))

    # Paint each cell
    for index, color in enumerate(colors):
        x = (index % grid_width) * pixel_size
        y = (index // grid_width) * pixel_size
        for dx in range(pixel_size):
            for dy in range(pixel_size):
                img.putpixel((x + dx, y + dy), color)

    # Print the mapping
    print("\nTriplet to Color Mapping:")
    print("-" * 40)
    
    for triplet, rgb, hex_code in zip(triplets, colors, hex_colors):
        print(f"{triplet} -> RGB: {rgb} -> Hex: {hex_code}")

    print("\nHex per character tripplet:")
    for hex_code in  hex_colors:
        print(f"{hex_code}")
        
    print("-" * 40)

    return img

# Define message
message = "Greetings Player and congratulations for completing this step of the process. The code is: 1312."

# Generate image and mapping
color_grid_img = text_to_hex_color_grid_with_mapping(message, cell_size=50, scale_up=True)  # Set True or False

# Save image
output_path = "./MOD_RGB_Grid.png"
color_grid_img.save(output_path)

print(f"\nImage saved to: {output_path}")
