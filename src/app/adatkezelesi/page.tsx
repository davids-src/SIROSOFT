import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adatkezelési Tájékoztató | SIROSOFT",
  description: "A SIROTECH Kft. (SIROSOFT) hivatalos adatkezelési tájékoztatója – GDPR-kompatibilis, hatályos 2026. 07. 20. napjától.",
};

export default function AdatkezelesiPage() {
  return (
    <main className="min-h-screen pt-36 pb-24 sm:pt-44 lg:pb-28">
      <div className="mx-auto max-w-3xl px-6">
        <span className="label font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
          Jogi dokumentumok
        </span>
        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-ink sm:text-5xl">
          Adatkezelési Tájékoztató
        </h1>
        <p className="mt-4 font-mono text-sm text-muted">
          SIROSOFT — egyedi szoftverfejlesztés &nbsp;|&nbsp; Hatályos: 2026. 07. 20. napjától &nbsp;|&nbsp; Elérhető: sirosoft.hu/adatkezelesi
        </p>

        <div className="mt-14 space-y-10 text-base leading-[1.8] text-muted">

          {/* 1. */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">1. Bevezetés, az Adatkezelő adatai</h2>
            <p>
              Jelen Adatkezelési Tájékoztató (a továbbiakban: Tájékoztató) célja, hogy a sirosoft.hu weboldal (a továbbiakban: Weboldal) látogatói, valamint a Weboldalon keresztül kapcsolatba lépő érdeklődők és ügyfelek (a továbbiakban: Érintett) számára átlátható, közérthető tájékoztatást nyújtson a személyes adataik kezeléséről, az Európai Parlament és a Tanács (EU) 2016/679 rendelete (a továbbiakban: GDPR), valamint az információs önrendelkezési jogról és az információszabadságról szóló 2011. évi CXII. törvény (a továbbiakban: Infotv.) rendelkezéseivel összhangban.
            </p>
            <p className="font-semibold text-ink">Adatkezelő megnevezése és elérhetőségei:</p>
            <div className="overflow-x-auto rounded-lg border border-line">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ["Cégnév", "SIROTECH Kft."],
                    ["Székhely", "8000 Székesfehérvár, Lövölde utca 24 4/15"],
                    ["Adószám", "33056151-2-07"],
                    ["Cégjegyzékszám", "07-09-037603"],
                    ["Képviselő", "Tóth Tamás Bence"],
                    ["E-mail cím", "hello@sironic.hu"],
                    ["Telefonszám", "+36 30 602 4666"],
                    ["Weboldal", "sirosoft.hu"],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-line last:border-0">
                      <td className="px-4 py-2.5 font-semibold text-ink w-40">{k}</td>
                      <td className="px-4 py-2.5">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>(a továbbiakban: Adatkezelő)</p>
            <p>Az Adatkezelő fenntartja a jogot jelen Tájékoztató egyoldalú módosítására, amelyről a Weboldalon történő közzététel útján tájékoztatja az Érintetteket. A módosítás nem érinti a már megadott adatok kezelésének jogszerűségét.</p>
          </section>

          {/* 2. */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">2. Fogalommeghatározások</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-ink">Személyes adat:</strong> azonosított vagy azonosítható természetes személyre („Érintett&quot;) vonatkozó bármely információ.</li>
              <li><strong className="text-ink">Adatkezelés:</strong> a személyes adatokon végzett bármely művelet (gyűjtés, rögzítés, tárolás, továbbítás, törlés stb.).</li>
              <li><strong className="text-ink">Adatkezelő:</strong> aki az adatkezelés céljait és eszközeit meghatározza.</li>
              <li><strong className="text-ink">Adatfeldolgozó:</strong> aki az Adatkezelő nevében, annak megbízásából kezel személyes adatokat (pl. tárhelyszolgáltató).</li>
              <li><strong className="text-ink">Hozzájárulás:</strong> az Érintett önkéntes, konkrét, tájékozott és egyértelmű akaratnyilatkozata.</li>
            </ul>
          </section>

          {/* 3. */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">3. Az adatkezelés alapelvei</h2>
            <p>Az Adatkezelő a személyes adatokat jogszerűen, tisztességesen és átlátható módon, célhoz kötötten, az adattakarékosság elvét szem előtt tartva, pontosan, korlátozott ideig, valamint megfelelő biztonsági intézkedések mellett kezeli, a GDPR 5. cikkében foglalt alapelveknek megfelelően.</p>
          </section>

          {/* 4. */}
          <section className="space-y-6">
            <h2 className="font-display text-2xl font-semibold text-ink">4. Az adatkezelés egyes esetei</h2>

            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-ink">4.1. Kapcsolatfelvételi űrlap használata</h3>
              <p>A Weboldalon elérhető kapcsolatfelvételi űrlap kitöltésekor az Érintett az alábbi adatokat adja meg: név, e-mail cím, valamint az üzenet szabadszöveges tartalma (pl. a projekt rövid leírása). Az űrlap elküldésekor a rendszer automatikusan két e-mailt generál: egyet az Adatkezelő részére (a megkeresés feldolgozása céljából), egyet pedig visszaigazolásként az Érintett által megadott e-mail címre (a beérkezés megerősítése céljából).</p>
              <div className="overflow-x-auto rounded-lg border border-line">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ["Az adatkezelés célja", "A megkeresés fogadása és megválaszolása, az Érintettel történő kapcsolatfelvétel, a beérkezés automatikus visszaigazolása."],
                      ["Az adatkezelés jogalapja", "GDPR 6. cikk (1) bek. b) pontja — szerződés megkötését megelőzően az Érintett kérésére történő lépések megtétele. Amennyiben ez nem állapítható meg egyértelműen, a jogalap a GDPR 6. cikk (1) bek. a) pontja szerinti önkéntes hozzájárulás."],
                      ["Adattovábbítás módja", "Az űrlapban megadott adatokat a rendszer automatikusan, e-mail útján továbbítja az Adatkezelő, illetve a visszaigazoló e-mailt az Érintett részére."],
                      ["Adatkezelés időtartama", "Szerződéskötés hiányában a megkeresés beérkezésétől számított legfeljebb 90 napig, ezt követően törlésre kerül. Szerződéskötés esetén a jogviszony és az elévülési/számviteli kötelezettségek végéig."],
                      ["Címzettek", "Az Adatkezelő feljogosított munkatársai, valamint a Weboldal technikai üzemeltetését és a levelezést biztosító Adatfeldolgozó (tárhelyszolgáltató, levelezőrendszer)."],
                    ].map(([k, v]) => (
                      <tr key={k} className="border-b border-line last:border-0">
                        <td className="px-4 py-2.5 font-semibold text-ink align-top w-52">{k}</td>
                        <td className="px-4 py-2.5">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-ink">4.2. Szerződéskötés, számlázás (megrendelt fejlesztési projekt esetén)</h3>
              <div className="overflow-x-auto rounded-lg border border-line">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ["Az adatkezelés célja", "Szerződés teljesítése, számlázás, valamint a fejlesztési projekt megvalósításához szükséges kapcsolattartás."],
                      ["Az adatkezelés jogalapja", "GDPR 6. cikk (1) bek. b) pontja (szerződés teljesítése), valamint c) pontja (jogi kötelezettség teljesítése)."],
                      ["Adatkezelés időtartama", "Számviteli bizonylatok (számlák) esetében a számvitelről szóló 2000. évi C. törvény 169. § (2) bekezdése alapján 8 év. Egyéb dokumentumok a szerződésből eredő igények elévüléséig (általános esetben 5 év)."],
                    ].map(([k, v]) => (
                      <tr key={k} className="border-b border-line last:border-0">
                        <td className="px-4 py-2.5 font-semibold text-ink align-top w-52">{k}</td>
                        <td className="px-4 py-2.5">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-ink">4.3. Sütik (cookie-k) kezelése</h3>
              <p>A Weboldal a látogatottság elemzése céljából a Google Analytics szolgáltatást alkalmazza. Ezen sütik elhelyezése kizárólag az Érintett előzetes, önkéntes hozzájárulása esetén történik; a hozzájárulás a Weboldalon megjelenő cookie-tájékoztató sávon keresztül adható meg vagy utasítható el.</p>
              <div className="overflow-x-auto rounded-lg border border-line">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-line bg-surface/50">
                      <th className="px-4 py-2.5 text-left text-ink font-semibold">Süti típusa</th>
                      <th className="px-4 py-2.5 text-left text-ink font-semibold">Cél</th>
                      <th className="px-4 py-2.5 text-left text-ink font-semibold">Jogalap</th>
                      <th className="px-4 py-2.5 text-left text-ink font-semibold">Időtartam</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2.5">Google Analytics</td>
                      <td className="px-4 py-2.5">Látogatottsági statisztika, a Weboldal használatának elemzése</td>
                      <td className="px-4 py-2.5">Hozzájárulás</td>
                      <td className="px-4 py-2.5">Google szabályzata szerint (max. 14–26 hónap)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>A Google Analytics által kezelt adatok részletei a Google adatvédelmi tájékoztatójában érhetők el (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-ink underline hover:text-[#1AE87B]">policies.google.com/privacy</a>).</p>
            </div>
          </section>

          {/* 5. */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">5. Adatfeldolgozók és egyéb adattovábbítás</h2>
            <p>Az Adatkezelő a következő Adatfeldolgozókat veszi igénybe:</p>
            <div className="overflow-x-auto rounded-lg border border-line">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-line bg-surface/50">
                    <th className="px-4 py-2.5 text-left text-ink font-semibold">Tevékenység</th>
                    <th className="px-4 py-2.5 text-left text-ink font-semibold">Név</th>
                    <th className="px-4 py-2.5 text-left text-ink font-semibold">Székhely</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Tárhelyszolgáltatás, weboldal üzemeltetés", "SIROTECH Kft.", "8000 Székesfehérvár, Lövölde utca 24 4/15"],
                    ["Statisztikai szolgáltatás", "Google Ireland Limited", "Gordon House, Barrow Street, Dublin 4, Írország"],
                    ["Könyvelés, számlázás", "Kinevezett könyvelő / számlázó", "—"],
                  ].map(([t, n, s]) => (
                    <tr key={t} className="border-b border-line last:border-0">
                      <td className="px-4 py-2.5">{t}</td>
                      <td className="px-4 py-2.5">{n}</td>
                      <td className="px-4 py-2.5">{s}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>Az Adatkezelő az adatok továbbítását harmadik fél részére kizárólag jogszabály vagy hozzájárulás alapján végzi. EGT-n kívüli adattovábbítás kizárólag a Google Analytics esetében fordulhat elő, a Google adatvédelmi elvei és a GDPR által megkövetelt garanciák (általános szerződési feltételek/SCC) alapján.</p>
          </section>

          {/* 6. */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">6. Az Érintettek jogai</h2>
            <p>Az Érintett a GDPR alapján az alábbi jogokkal élhet, amelyeket az Adatkezelő elérhetőségein (<a href="mailto:hello@sironic.hu" className="text-ink underline hover:text-[#1AE87B]">hello@sironic.hu</a>) gyakorolhat:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-ink">Tájékoztatáshoz és hozzáféréshez való jog:</strong> tájékoztatást kérhet az adatkezelés tényéről és részleteiről.</li>
              <li><strong className="text-ink">Helyesbítéshez való jog:</strong> kérheti a pontatlan adatok javítását.</li>
              <li><strong className="text-ink">Törléshez való jog:</strong> kérheti adatai törlését, ha az adatkezelés célja megszűnt vagy visszavonta hozzájárulását.</li>
              <li><strong className="text-ink">Az adatkezelés korlátozásához való jog.</strong></li>
              <li><strong className="text-ink">Adathordozhatósághoz való jog:</strong> kérheti adatai géppel olvasható formátumban történő kiadását.</li>
              <li><strong className="text-ink">Tiltakozáshoz való jog:</strong> jogos érdeken alapuló adatkezelés esetén.</li>
              <li><strong className="text-ink">Hozzájárulás visszavonásának joga:</strong> bármikor visszavonhatja a hozzájárulást.</li>
            </ul>
            <p>Az Adatkezelő a kérelmeket indokolatlan késedelem nélkül, de legkésőbb a beérkezéstől számított egy hónapon belül teljesíti.</p>
          </section>

          {/* 7. */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">7. Jogorvoslati lehetőségek</h2>
            <h3 className="font-semibold text-ink">a) Panasz a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH)</h3>
            <ul className="space-y-1 list-none pl-0">
              <li>Székhely: 1055 Budapest, Falk Miksa utca 9–11.</li>
              <li>Postacím: 1363 Budapest, Pf. 9.</li>
              <li>Telefon: +36 (1) 391-1400</li>
              <li>E-mail: <a href="mailto:ugyfelszolgalat@naih.hu" className="text-ink underline hover:text-[#1AE87B]">ugyfelszolgalat@naih.hu</a></li>
              <li>Weboldal: <a href="https://www.naih.hu" target="_blank" rel="noopener noreferrer" className="text-ink underline hover:text-[#1AE87B]">www.naih.hu</a></li>
            </ul>
            <h3 className="font-semibold text-ink">b) Bírósági jogorvoslat</h3>
            <p>Az Érintett jogosult a jogainak megsértése esetén bírósághoz fordulni. A per a törvényszék hatáskörébe tartozik, az Érintett választása szerint a lakóhelye szerinti törvényszék előtt is megindítható.</p>
          </section>

          {/* 8. */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">8. Adatbiztonsági intézkedések</h2>
            <p>Az Adatkezelő megfelelő technikai és szervezési intézkedésekkel gondoskodik a kezelt személyes adatok biztonságáról, és védi azokat a jogosulatlan hozzáférés, megváltoztatás, továbbítás, nyilvánosságra hozatal, törlés, megsemmisítés, valamint a véletlen megsemmisülés és sérülés ellen. Ennek körében többek között az alábbi intézkedéseket alkalmazza:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>titkosított adatátvitel (HTTPS/TLS) a Weboldalon és a levelezés során;</li>
              <li>hozzáférés-kezelés és jogosultsági szintek alkalmazása a fejlesztői környezetekben;</li>
              <li>rendszeres biztonsági mentés;</li>
              <li>naplózás és rendszeres biztonsági felülvizsgálat.</li>
            </ul>
          </section>

          {/* 9. */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">9. Záró rendelkezések</h2>
            <p>Jelen Tájékoztatóra a magyar jog, elsősorban a GDPR és az Infotv. rendelkezései az irányadóak. Az Adatkezelő fenntartja a jogot, hogy jelen Tájékoztatót egyoldalúan, a Weboldalon történő közzététellel módosítsa.</p>
            <p className="font-mono text-xs text-muted pt-4 border-t border-line">Utolsó módosítás dátuma: 2026. 07. 20.</p>
          </section>

        </div>
      </div>
    </main>
  );
}
