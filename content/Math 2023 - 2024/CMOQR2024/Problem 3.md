Let $D$ be the intersection between the altitude from $B$ to $AC$. Let $E$ be the foot of the altitude from $M$ to $BC$. Let $F$ be the foot of the altitude from $A$ to $BC$. Let $G$ be the foot of the altitude form $M$ to $AB$, as shown in the diagram. We are given $ME = 6$ and $MG = 1$.
![[Drawing 2024-02-04 23.48.25.excalidraw]]

Since $B,H,M$ are collinear,
$$
\angle BDA = \angle BDC = 90^{\circ} = \angle ADM = \angle MDC.
$$
Since $M$ is the midpoint of arc $BAC$, it is well known that $BM = CM$. Based on the Inscribed Angle Theorem, $\angle MBA = \angle MCA$ and $\angle CMB = \angle CAB$. Thus, by ASA congruence, $\triangle MDC \cong \triangle MGB$ which means $MG = MD = 1.$

Lets connect a line from $M$ to $A$. Since $\angle MAC = \angle MBC$ due to the Inscribed Angle Theorem, $\triangle MDA \sim \triangle MEB$ by AAA similarity. Since $\angle AMB = \angle ACB$ due to the Inscribed Angle Theorem, $\triangle MDA \sim \triangle CDB$ by AAA similarity. Therefore, $\triangle MEB \sim \triangle CDB$. Moreover, since $\angle DCB = \angle ACF$, $\triangle CDB \sim \triangle AFC$ by AAA similarity which means $\triangle MEB \sim \triangle AFC$.

Let $CE = x$. Then by the Pythagorean Theorem, $CM = \sqrt{x^2+36}$ and $CD = \sqrt{(\sqrt{x^2+36})^2-1^2} = \sqrt{x^2+35}$. Since $BM = CM$ and $ME = ME$, $\triangle MEC \cong \triangle MEB$ by HL congruence. This means that $CE = EB = x$ and $CB = 2x.$ Then, $DB = \sqrt{(2x)^2 - (x^2+35)} = \sqrt{3x^2-35}$.

Since $\triangle MEB \sim \triangle CDB$, $\frac{CD}{ME} = \frac{DB}{EB}$. Substituting the values we've obtained previously, we get
$$
\frac{\sqrt{x^2+35}}{6} = \frac{\sqrt{3x^2-35}}{x}.
$$
Solving for $x$, we obtain $x = 2\sqrt{7}$ and $x = 3\sqrt{5}$. We will now calculate the area of $\triangle ABC$ for each $x$ value.

If $x = 2\sqrt{7}$, $\triangle MEC$ has sides $CE = 2\sqrt{7}, ME = 6, MC = 8$. Plugging $x = 2\sqrt{7}$ into our previous equations, we get $CB = 4\sqrt{7}$ and $CD = \sqrt{x^2+35} = \sqrt{63} = 3\sqrt{7}$.
Since $\triangle MEC \cong \triangle MEB$, $EB = 2\sqrt{7}$ and $MB = 8$. We have previously proven that $\triangle MDA \sim \triangle MEB$. Thus, $\frac{ME}{MD} = \frac{EB}{DA} = \frac{6}{1} = \frac{2\sqrt{7}}{DA}.$ We find that $DA = \frac{1}{3}\sqrt{7}$. We thus have $AC = CD + DA = \frac{10}{3}\sqrt{7}$.

Previously, we have also proven that $\triangle MEB \sim \triangle AFC$. This means
$$
\frac{AC}{MB} = \frac{AF}{EB} = \frac{\frac{10}{3}\sqrt{7}}{8} = \frac{AF}{2\sqrt{7}}.
$$
We then obtain $AF = \frac{35}{6}$. The area of $\triangle ABC = \frac{(AF)(CB)}{2} = \frac{\frac{35}{6}(4\sqrt{7})}{2} = \frac{35}{3}\sqrt{7}$.

If $x = 3\sqrt{5}$, $\triangle MEC$ has sides $CE = 3\sqrt{5}, ME = 6, MC = 9$. Plugging $x = 3\sqrt{5}$ into our previous equations, we get $CB = 6\sqrt{5}$ and $CD = \sqrt{x^2+35} = \sqrt{80} = 4\sqrt{5}$.
Since $\triangle MEC \cong \triangle MEB$, $EB = 3\sqrt{5}$ and $MB = 9$. We have previously proven that $\triangle MDA \sim \triangle MEB$. Thus, $\frac{ME}{MD} = \frac{EB}{DA} = \frac{6}{1} = \frac{3\sqrt{5}}{DA}.$ We find that $DA = \frac{1}{2}\sqrt{5}$. We thus have $AC = CD + DA = \frac{9}{2}\sqrt{5}$.

Previously, we have also proven that $\triangle MEB \sim \triangle AFC$. This means
$$
\frac{AC}{MB} = \frac{AF}{EB} = \frac{\frac{9}{2}\sqrt{5}}{9} = \frac{AF}{3\sqrt{5}}.
$$
We then obtain $AF = \frac{15}{2}$. The area of $\triangle ABC = \frac{(AF)(CB)}{2} = \frac{(\frac{15}{2})(6\sqrt{5})}{2} = \frac{45\sqrt{5}}{2}$.

Therefore, the areas of $\triangle ABC$ can be either $\frac{35}{3}\sqrt{7}$ or $\frac{45\sqrt{5}}{2}$.