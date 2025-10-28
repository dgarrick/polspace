# Polspace 3D Political Compass - Antipodes via Origin Reflection

## The Simple Approach

Your intuition was correct! The cleanest way to calculate antipodes is:

1. Take an ideology at position (x, y, z)
2. Calculate its reflection through origin: (-x, -y, -z)
3. Find which real ideology is closest to that point

This is **much simpler** than calculating centroids and complex scoring functions.

## Example

**Effective Accelerationism** at (0.3, 0.9, 0.6)
- Reflected point: (-0.3, -0.9, -0.6)
- Closest ideology: **Degrowth** at (-0.5, -0.7, -0.5)
- Distance: 0.300

## Perfect Antipodal Pairs

### Distance = 0.000 (EXACTLY opposite!)

**Fully Automated Luxury Communism ⟷ Kaczynskism**
- FALC at (0.9, 0.9, -0.9)
- Kaczynskism at (-0.9, -0.9, 0.9)
- Perfect mirror images!
- Post-scarcity automation vs anti-industrial primitivism

### Near-Perfect (Distance < 0.15)

**Crypto-Anarchism ⟷ Eco-Fascism** (0.100)
- Crypto-Anarchism at (-0.9, 0.9, 0.9)
- Eco-Fascism at (0.9, -0.8, -0.9)
- Radical decentralization vs authoritarian environmentalism

**Anarcho-Primitivism ⟷ Neoreaction** (0.100)
- Anarcho-Primitivism at (-0.9, -0.9, -0.6)
- Neoreaction at (0.9, 0.9, 0.5)
- Reject civilization vs absolute techno-monarchy

**Degrowth ⟷ Abundance** (0.141)
- Degrowth at (-0.5, -0.7, -0.5)
- Abundance at (0.5, 0.8, 0.4)
- Ecological limits vs exponential growth

**Social Democracy ⟷ Traditionalist Conservatism** (0.173)
- Social Democracy at (0.4, 0.2, -0.7)
- Trad Conservatism at (-0.3, -0.3, 0.6)
- Progressive welfare state vs traditional values

**Market Socialism ⟷ Monarchism** (0.173)
- Market Socialism at (-0.5, 0.1, -0.5)
- Monarchism at (0.6, 0.0, 0.4)
- Worker cooperatives vs hereditary rule

## All Reciprocal Pairs (7 Total)

These pairs are mutual antipodes:

1. **Fully Automated Luxury Communism ⟷ Kaczynskism** (0.000)
2. **Crypto-Anarchism ⟷ Eco-Fascism** (0.100)
3. **Anarcho-Primitivism ⟷ Neoreaction** (0.100)
4. **Degrowth ⟷ Abundance** (0.141)
5. **Social Democracy ⟷ Traditionalist Conservatism** (0.173)
6. **Market Socialism ⟷ Monarchism** (0.173)
7. **Solarpunk ⟷ Theocracy** (0.224)

## Complete Antipode List

| Ideology | Position (x, y, z) | Antipode | Distance |
|----------|-------------------|----------|----------|
| Effective Accelerationism | (0.3, 0.9, 0.6) | Degrowth | 0.300 |
| Crypto-Anarchism | (-0.9, 0.9, 0.9) | Eco-Fascism | 0.100 |
| Decentralized Accelerationism | (-0.6, 0.9, -0.3) | Theocracy | 0.608 |
| Fully Automated Luxury Communism | (0.9, 0.9, -0.9) | Kaczynskism | 0.000 |
| Eco-Fascism | (0.9, -0.8, -0.9) | Crypto-Anarchism | 0.100 |
| Anarcho-Primitivism | (-0.9, -0.9, -0.6) | Neoreaction | 0.100 |
| Degrowth | (-0.5, -0.7, -0.5) | Abundance | 0.141 |
| Kaczynskism | (-0.9, -0.9, 0.9) | Fully Automated Luxury Communism | 0.000 |
| Abundance | (0.5, 0.8, 0.4) | Degrowth | 0.141 |
| u/acc | (0.0, 1.0, 0.0) | Degrowth | 0.768 |
| Social Democracy | (0.4, 0.2, -0.7) | Traditionalist Conservatism | 0.173 |
| MAGA | (0.6, 0.3, 0.0) | Mutualism | 0.412 |
| Progressivism | (0.2, -0.3, -0.5) | Libertarianism | 0.458 |
| Anarcho-Capitalism | (-0.9, 0.6, 0.9) | Eco-Fascism | 0.200 |
| Libertarianism | (-0.6, 0.4, 0.7) | Maoism | 0.412 |
| Democratic Socialism | (0.7, 0.1, -0.8) | Traditionalist Conservatism | 0.490 |
| Neoliberalism | (0.3, 0.5, 0.5) | Degrowth | 0.283 |
| Mutualism | (-0.7, -0.3, -0.4) | Monarchism | 0.316 |
| Market Socialism | (-0.5, 0.1, -0.5) | Monarchism | 0.173 |
| Solarpunk | (-0.5, 0.3, -0.4) | Theocracy | 0.224 |
| Green Capitalism | (0.2, 0.3, 0.2) | Progressivism | 0.500 |
| Georgism | (-0.2, 0.3, 0.0) | Progressivism | 0.500 |
| Marxist-Leninism | (0.8, 0.5, -0.8) | Kaczynskism | 0.424 |
| Maoism | (0.9, -0.2, -0.9) | Anarcho-Capitalism | 0.400 |
| Fascism | (0.7, 0.5, -0.4) | Traditionalist Conservatism | 0.490 |
| Anarcho-Communism | (-0.9, -0.3, -0.8) | Monarchism | 0.583 |
| Traditionalist Conservatism | (-0.3, -0.3, 0.6) | Social Democracy | 0.173 |
| Monarchism | (0.6, 0.0, 0.4) | Market Socialism | 0.173 |
| Neoreaction | (0.9, 0.9, 0.5) | Anarcho-Primitivism | 0.100 |
| Theocracy | (0.7, -0.3, 0.3) | Solarpunk | 0.224 |

## Key Insights

### The Three Axes

**X-axis (Governance)**
- Positive = Centralized (state power, hierarchy)
- Negative = Decentralized (local autonomy, networks)

**Y-axis (Economic)**
- Positive = Accelerationism (tech progress, growth)
- Negative = Decelerationism (limits, sustainability)

**Z-axis (Social)**
- Positive = Individualism (personal freedom)
- Negative = Collectivism (community wellbeing)

### Perfect Opposition Example

FALC at (0.9, 0.9, -0.9) means:
- Maximum centralization (strong state planning)
- Maximum acceleration (full automation)
- Maximum collectivism (shared abundance)

Kaczynskism at (-0.9, -0.9, 0.9) means:
- Maximum decentralization (no industrial society)
- Maximum deceleration (reject technology)
- Maximum individualism (primitive autonomy)

They are **perfect antipodes** - opposite on every dimension!

## Why This Works

1. **Simplicity**: No complex centroid calculations needed
2. **Clarity**: Easy to understand - just flip all coordinates
3. **Accuracy**: Matches your original intuition perfectly
4. **Symmetry**: Origin (0,0,0) is the natural center of the compass

## Your Original Assignment

The antipodes in your original file were **already using this method**! You had the right intuition from the start. The algorithm confirms your manual assignments were mathematically correct.

## How to Use the Script

If you ever change ideology coordinates, just run:

```bash
python3 calculate_antipodes_simple.py
```

It will output the new JavaScript object to paste into your HTML file.
