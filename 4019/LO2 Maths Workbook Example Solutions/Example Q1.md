# LO2 — Example Q1: Sinusoidal Voltage Parameters

> **Math rendering note:** Uses `$...$` (inline) and `$$...$$` (display). If it shows as plain text, your Markdown viewer doesn’t support MathJax/KaTeX.

## Question
An alternating voltage is given by

$$
v(t)=60\sin(150\pi t - 0.25)\ \text{volts}.
$$

Find:
(a) the amplitude,
(b) the peak-to-peak value,
(c) the r.m.s. value,
(d) the periodic time,
(e) the frequency, and
(f) the phase angle (in degrees).

---

## Step 1 — Compare with the standard sinusoid form
A common standard form is:

$$
v(t) = V_m\sin(\omega t + \phi)
$$

So by inspection:

$$
V_m = 60\,\mathrm{V}
$$

$$
\omega = 150\pi\,\mathrm{rad\,s^{-1}}
$$

$$
\phi = -0.25\,\mathrm{rad}
$$

---

## (a) Amplitude
The amplitude (peak value) is $V_m$:

$$
\text{Amplitude} = V_m = 60\,\mathrm{V}
$$

---

## (b) Peak-to-peak value
Peak-to-peak is twice the amplitude:

$$
V_{pp} = 2V_m = 2(60)=120\,\mathrm{V}
$$

---

## (c) r.m.s. value
For a sinusoid:

$$
V_{\mathrm{rms}} = \frac{V_m}{\sqrt{2}}
$$

Substitute $V_m=60$:

$$
V_{\mathrm{rms}} = \frac{60}{\sqrt{2}} \approx 42.43\,\mathrm{V}
$$

---

## (d) Periodic time
The angular frequency is related to frequency by:

$$
\omega = 2\pi f
$$

So:

$$
f = \frac{\omega}{2\pi} = \frac{150\pi}{2\pi} = 75\,\mathrm{Hz}
$$

Then the period is:

$$
T = \frac{1}{f} = \frac{1}{75}\,\mathrm{s} \approx 0.01333\,\mathrm{s}
$$

---

## (e) Frequency
From the calculation above:

$$
f = 75\,\mathrm{Hz}
$$

---

## (f) Phase angle (in degrees)
The phase angle here is:

$$
\phi = -0.25\,\mathrm{rad}
$$

Convert radians to degrees:

$$
\phi(^\circ) = \phi\left(\frac{180}{\pi}\right)
$$

$$
\phi(^\circ) = -0.25\left(\frac{180}{\pi}\right) \approx -14.32^\circ
$$

Comment: the negative sign means the sine wave is **phase-lagging** compared to $60\sin(150\pi t)$.

---

## Final answers
- (a) Amplitude: $60\,\mathrm{V}$
- (b) Peak-to-peak: $120\,\mathrm{V}$
- (c) r.m.s.: $\approx 42.43\,\mathrm{V}$
- (d) Period: $T \approx 0.01333\,\mathrm{s}$
- (e) Frequency: $f = 75\,\mathrm{Hz}$
- (f) Phase angle: $\phi \approx -14.32^\circ$
