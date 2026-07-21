import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Általános Szerződési Feltételek | SIROSOFT",
  description: "A SIROTECH Kft. (SIROSOFT) szoftverfejlesztési szolgáltatásainak általános szerződési feltételei – hatályos 2026. 07. 20. napjától.",
};

export default function AszfPage() {
  return (
    <main className="min-h-screen pt-36 pb-24 sm:pt-44 lg:pb-28">
      <div className="mx-auto max-w-3xl px-6">
        <span className="label font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#1AE87B]">
          Jogi dokumentumok
        </span>
        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-ink sm:text-5xl">
          Általános Szerződési Feltételek
        </h1>
        <p className="mt-4 font-mono text-sm text-muted">
          SIROSOFT — egyedi szoftverfejlesztés &nbsp;|&nbsp; Hatályos: 2026. 07. 20. napjától &nbsp;|&nbsp; Elérhető: sirosoft.hu/aszf
        </p>

        <div className="mt-14 space-y-10 text-base leading-[1.8] text-muted">

          {/* 1. */}
          <section className="space-y-6">
            <h2 className="font-display text-2xl font-semibold text-ink">1. Bevezető rendelkezések</h2>
            <p>
              Jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) szabályozzák a sirosoft.hu weboldalon (a továbbiakban: Weboldal) keresztül kezdeményezett kapcsolatfelvétel, ajánlatkérés, valamint az ezt követően esetlegesen létrejövő egyedi szoftverfejlesztési, weboldal-fejlesztési és rendszerintegrációs szerződések általános feltételeit.
            </p>
            <p>
              <strong className="text-ink">Fontos:</strong> a Weboldal nem minősül webáruháznak (webshopnak), azon keresztül közvetlen, online fizetést igénylő termék- vagy szolgáltatásvásárlásra nincs lehetőség. A Weboldal elsődleges célja a látogatók tájékoztatása, valamint a kapcsolatfelvétel és az ajánlatkérés lebonyolításának megkönnyítése.
            </p>

            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-ink">1.1. Szolgáltató (a Vállalkozás) adatai</h3>
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
                      ["Tárhelyszolgáltató", "SIROTECH Kft. — 8000 Székesfehérvár, Lövölde utca 24 4/15"],
                    ].map(([k, v]) => (
                      <tr key={k} className="border-b border-line last:border-0">
                        <td className="px-4 py-2.5 font-semibold text-ink w-44">{k}</td>
                        <td className="px-4 py-2.5">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>(a továbbiakban: Szolgáltató)</p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-xl font-semibold text-ink">1.2. A Megrendelő</h3>
              <p>Jelen ÁSZF alkalmazásában Megrendelőnek minősül minden természetes vagy jogi személy, aki a Weboldalon keresztül a Szolgáltatóval kapcsolatba lép, tőle ajánlatot kér, vagy vele fejlesztési szerződéses jogviszonyt létesít (a továbbiakban: Megrendelő).</p>
            </div>
          </section>

          {/* 2. */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">2. A szolgáltatások köre</h2>
            <p>A Szolgáltató (SIROSOFT) tevékenységi köre elsődlegesen az alábbi egyedi szoftverfejlesztési szolgáltatásokra terjed ki:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>weboldalak és webalkalmazások tervezése, fejlesztése és üzembe helyezése (Next.js/React alapú, egyedi dizájnnal);</li>
              <li>belső ügyviteli rendszerek, egyedi webalapú vállalatirányítási megoldások fejlesztése;</li>
              <li>CRM (ügyfélkapcsolat-kezelő) rendszerek egyedi fejlesztése;</li>
              <li>ERP (vállalatirányítási) rendszerek moduláris fejlesztése;</li>
              <li>mobilalkalmazás-fejlesztés (React Native alapon, iOS és Android platformra);</li>
              <li>rendszerintegráció, API-fejlesztés és -integráció, automatizációk kialakítása;</li>
              <li>meglévő rendszerek bővítése, refaktorálása, karbantartása;</li>
              <li>a fentiekhez kapcsolódó tanácsadás, igényfelmérés és opcionális üzemeltetési támogatás.</li>
            </ul>
            <p>A Weboldalon feltüntetett szolgáltatások és az azokhoz kapcsolódó tájékoztató tartalmak (leírások, illusztrációk, technológiai listák) kizárólag tájékoztató jellegűek, és nem minősülnek a Szolgáltató részéről tett kötelező erejű ajánlatnak.</p>
          </section>

          {/* 3. */}
          <section className="space-y-6">
            <h2 className="font-display text-2xl font-semibold text-ink">3. A projekt megrendelésének menete</h2>
            <p>A Szolgáltató és a Megrendelő közötti szerződéses jogviszony létrejötte az alábbi, egymást követő lépéseken keresztül valósul meg:</p>

            {[
              {
                title: "3.1. Lépés – Ajánlatkérés / kapcsolatfelvétel a Weboldalon",
                body: "A Megrendelő a Weboldalon található kapcsolatfelvételi űrlapon, e-mailben vagy telefonon felveszi a kapcsolatot a Szolgáltatóval, és röviden ismerteti projektjét vagy problémáját. Az így megadott adatok a Szolgáltató részére e-mailben kerülnek továbbításra. Az adatkezelés részleteiről a Weboldalon közzétett Adatkezelési Tájékoztató nyújt bővebb információt.",
              },
              {
                title: "3.2. Lépés – Ingyenes konzultáció, igényfelmérés",
                body: "A Szolgáltató a megkeresés alapján ingyenes, kötelezettségmentes konzultációt biztosít, amelynek keretében megismeri a Megrendelő folyamatait, céljait és korlátait. Ehhez nem szükséges kész specifikáció a Megrendelő részéről.",
              },
              {
                title: "3.3. Lépés – Specifikáció és árajánlat",
                body: "Az igényfelmérés eredménye alapján a Szolgáltató részletes funkcionális leírást, képernyőterveket és/vagy technikai architektúra-tervet, valamint írásbeli, kötelező erejű árajánlatot készít, amely tartalmazza a fejlesztendő rendszer terjedelmét, a mérföldköveket és határidőket, valamint a fizetési feltételeket. A felek közötti szerződéses jogviszony az árajánlat elfogadásával, illetve az egyedi fejlesztési szerződés aláírásával jön létre.",
              },
              {
                title: "3.4. Lépés – Fejlesztés",
                body: "A Szolgáltató sprint alapú fejlesztési módszertan szerint dolgozik, rendszeres demók és állapotjelentések mellett, hogy a Megrendelő folyamatosan nyomon követhesse a projekt előrehaladását.",
              },
              {
                title: "3.5. Lépés – Tesztelés és átadás",
                body: "A fejlesztés lezárását követően a Szolgáltató minőségbiztosítási tesztelést végez, majd a rendszert éles környezetbe telepíti. Az átadás dokumentációval (kód-, telepítési és kezelési dokumentáció), valamint — igény esetén — oktatással jár együtt.",
              },
              {
                title: "3.6. Lépés – Opcionális üzemeltetés és karbantartás",
                body: "A Megrendelő igénye esetén a Szolgáltató a projekt átadását követően folyamatos karbantartási és fejlesztési (üzemeltetési) szolgáltatást is nyújthat, amelynek feltételeit külön szerződés vagy az eredeti szerződés mellékletei rögzítik.",
              },
            ].map((item) => (
              <div key={item.title} className="space-y-2">
                <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </section>

          {/* 4. */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">4. Az online tájékoztatás jogi jellege</h2>
            <ol className="space-y-3 list-decimal list-inside">
              <li>A Weboldalon feltüntetett technológiai megoldások, referenciák és folyamatleírások kizárólag tájékoztató jellegűek, és nem minősülnek a Szolgáltató részéről a Polgári Törvénykönyv szerinti kötelező erejű szerződéses ajánlatnak.</li>
              <li>A felek közötti szerződéses jogviszony kizárólag a jelen ÁSZF 3.3. pontja szerinti írásbeli árajánlat elfogadásával, illetve az egyedi fejlesztési szerződés aláírásával jön létre.</li>
            </ol>
          </section>

          {/* 5. */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">5. Díjazás és fizetési feltételek</h2>
            <p>A projekt díja az egyedi szerződésben/árajánlatban meghatározott mértékű, amely lehet egyösszegű díj, mérföldkövenkénti részletfizetés, előre rögzített ütemezés szerinti részletfizetés, vagy — eseti (change request) munkák esetén — óradíj alapú elszámolás.</p>
            <p>A Szolgáltató a teljesítésről (részteljesítésről) számlát állít ki, amelyet a Megrendelő a számlán feltüntetett fizetési határidőn (jellemzően a kézhezvételtől számított 15 naptári napon) belül, banki átutalással köteles kiegyenlíteni.</p>
            <p>Késedelmes fizetés esetén a Szolgáltató jogosult a Ptk. szerinti késedelmi kamat felszámítására, valamint a fejlesztési munkálatok felfüggesztésére.</p>
            <p>A díjak az általános forgalmi adót nem tartalmazzák, kivéve, ha az ajánlat/szerződés kifejezetten másként rendelkezik.</p>
          </section>

          {/* 6. */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">6. Elállás, módosítás, változáskezelés</h2>
            <ol className="space-y-3 list-decimal list-inside">
              <li>A Megrendelő a megkeresést, illetve a konzultációra vonatkozó időpont-egyeztetést a végleges szerződés megkötéséig bármikor, indokolás nélkül, díjmentesen visszavonhatja.</li>
              <li>A specifikáción és a jóváhagyott árajánlaton túlmutató igények változáskérésnek (change request) minősülnek, amelyek hatáselemzését a Szolgáltató elkészíti, és amelyek csak a Megrendelő jóváhagyása esetén kerülnek megvalósításra, a jelen ÁSZF 5. pontja szerinti óradíjon.</li>
              <li>A végleges szerződés megkötését követő elállás, felmondás és az azzal kapcsolatos jogkövetkezmények (pl. már elvégzett munkák arányos díjazása) tekintetében az egyedi szerződésben, illetve annak hiányában a Polgári Törvénykönyv vállalkozási szerződésre vonatkozó szabályai (Ptk. 6:238–6:248. §) az irányadóak.</li>
              <li>Amennyiben a Megrendelő fogyasztónak minősül és a szerződés a fogyasztó és a vállalkozás közötti szerződések részletes szabályairól szóló 45/2014. (II. 26.) Korm. rendelet hatálya alá tartozó, üzlethelyiségen kívül vagy távollévők között kötött szerződésnek minősül, a Megrendelőt megilletheti a jogszabály szerinti elállási/felmondási jog, amelynek feltételeiről a Szolgáltató a szerződéskötést megelőzően külön tájékoztatást ad.</li>
            </ol>
          </section>

          {/* 7. */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">7. Szerzői jogok és szellemi tulajdon</h2>
            <ol className="space-y-3 list-decimal list-inside">
              <li>A fejlesztési munkálatok eredményeként létrejövő weboldal, szoftver, forráskód és kapcsolódó dokumentáció szerzői joga — a szerződés szerinti díj teljes megfizetésének időpontjától — a Megrendelőre száll át, kivéve a jelen pont 2. alpontjában foglalt eseteket.</li>
              <li>Amennyiben a fejlesztés során a Szolgáltató saját fejlesztésű, általános felhasználású keretrendszereket, könyvtárakat vagy komponenseket használ fel (&quot;Előzetes Szellemi Tulajdon&quot;), azok szerzői joga a Szolgáltatónál marad; a Megrendelő ezekre korlátlan, visszavonhatatlan, nem kizárólagos felhasználási jogot kap.</li>
              <li>Nyílt forráskódú (open-source) komponensek felhasználása esetén a Szolgáltató tájékoztatja a Megrendelőt az alkalmazott licencekről, és gondoskodik arról, hogy azok ne korlátozzák a végeredmény üzleti felhasználhatóságát.</li>
              <li>A Szolgáltató a Megrendelő előzetes írásbeli hozzájárulása nélkül nem jogosult a fejlesztett rendszert vagy annak részét portfólióján vagy referenciaanyagain bemutatni.</li>
            </ol>
          </section>

          {/* 8. */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">8. Garancia és jótállás</h2>
            <ol className="space-y-3 list-decimal list-inside">
              <li>A Szolgáltató az átadás-átvétel visszaigazolásának napjától számított 90 napos garanciát vállal a fejlesztett rendszer hibamentes, specifikáció szerinti működésére.</li>
              <li>A garancia kiterjed a specifikációtól eltérő működésre (funkcionális hibák), a fejlesztési folyamatból eredő biztonsági sérülékenységekre, valamint a dokumentált célplatformokon jelentkező kompatibilitási hibákra.</li>
              <li>A garancia nem terjed ki a Megrendelő vagy harmadik fél által végzett módosításokból, a tárhely-/domain-szolgáltató által okozott leállásokból, a rendszerkövetelményektől eltérő szerverkörnyezet-váltásból, illetve a Megrendelő által feltöltött tartalmakból eredő hibákra.</li>
              <li>A garancián felüli hibaelhárítás és fejlesztési munkák a jelen ÁSZF 5. pontja szerinti óradíjon számolhatók el.</li>
            </ol>
          </section>

          {/* 9. */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">9. Felelősség korlátozása</h2>
            <ol className="space-y-3 list-decimal list-inside">
              <li>A Szolgáltató a tőle elvárható szakmai gondossággal, iparági sztenderdeknek megfelelően jár el, azonban nem felel olyan károkért, amelyek harmadik fél (pl. tárhelyszolgáltató, domain-szolgáltató, szoftvergyártó) hibás teljesítéséből, vis maior eseményből, vagy a Megrendelő, illetve munkavállalói által okozott hibás használatból, jogosulatlan módosításból erednek.</li>
              <li>A Szolgáltató kártérítési felelőssége — a szándékos károkozás esetét kivéve — nem haladhatja meg a Megrendelő által a jelen ÁSZF alapján ténylegesen megfizetett díj összegét.</li>
              <li>A Szolgáltató nem vállal felelősséget a Weboldal esetleges technikai hibájából vagy átmeneti elérhetetlenségéből eredő közvetett károkért.</li>
            </ol>
          </section>

          {/* 10. */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">10. Titoktartás</h2>
            <p>A Felek kötelezettséget vállalnak arra, hogy a szerződés teljesítése során tudomásukra jutott üzleti titkot, know-how-t, forráskódot, adatokat és technológiai megoldásokat bizalmasan kezelik, és azt harmadik személy részére — a másik Fél előzetes írásbeli hozzájárulása nélkül — nem teszik hozzáférhetővé.</p>
            <p>Amennyiben a fejlesztés során a Szolgáltató személyes adatokhoz fér hozzá, a Felek a GDPR 28. cikke szerinti adatfeldolgozói megállapodást kötnek.</p>
          </section>

          {/* 11. */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">11. Adatvédelem</h2>
            <p>A Weboldal használata, így különösen a kapcsolatfelvételi űrlap kitöltése, valamint a fejlesztési szerződés teljesítése során megadott személyes adatok kezeléséről a Szolgáltató a Weboldalon külön elérhető <a href="/adatkezelesi" className="text-ink underline hover:text-[#1AE87B]">Adatkezelési Tájékoztatóban</a> ad részletes felvilágosítást, amely jelen ÁSZF elválaszthatatlan mellékletét képezi.</p>
          </section>

          {/* 12. */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">12. Panaszkezelés</h2>
            <ol className="space-y-3 list-decimal list-inside">
              <li>A Megrendelő a Szolgáltató tevékenységével, illetve a szolgáltatás nyújtásával kapcsolatos panaszát az 1.1. pontban megjelölt elérhetőségeken (elsősorban a <a href="mailto:hello@sironic.hu" className="text-ink underline hover:text-[#1AE87B]">hello@sironic.hu</a> e-mail címen) jelentheti be.</li>
              <li>A Szolgáltató a beérkezett panaszt kivizsgálja, és arra a vonatkozó jogszabályok (így különösen a fogyasztóvédelemről szóló 1997. évi CLV. törvény, amennyiben a Megrendelő fogyasztónak minősül) szerinti határidőn belül írásban válaszol.</li>
              <li>Amennyiben a panasz rendezésére a felek között nem kerül sor, a Megrendelő (fogyasztói minőségben eljáró Megrendelő esetén) jogosult a lakóhelye, illetve tartózkodási helye szerint illetékes békéltető testülethez fordulni, vagy igényét bírói úton érvényesíteni.</li>
            </ol>
          </section>

          {/* 13. */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink">13. Vegyes és záró rendelkezések</h2>
            <ol className="space-y-3 list-decimal list-inside">
              <li>Jelen ÁSZF-ben nem szabályozott kérdésekben a magyar jog, így különösen a Polgári Törvénykönyvről szóló 2013. évi V. törvény, a fogyasztóvédelemről szóló 1997. évi CLV. törvény, a szerzői jogról szóló 1999. évi LXXVI. törvény, valamint az elektronikus kereskedelmi szolgáltatásokról szóló 2001. évi CVIII. törvény rendelkezései az irányadóak.</li>
              <li>A Szolgáltató fenntartja a jogot jelen ÁSZF egyoldalú módosítására. A módosított ÁSZF a Weboldalon történő közzétételtől hatályos, és a közzétételt megelőzően létrejött szerződéses jogviszonyokat nem érinti.</li>
              <li>Amennyiben jelen ÁSZF valamely rendelkezése érvénytelennek vagy végrehajthatatlannak bizonyulna, az nem érinti a többi rendelkezés érvényességét.</li>
              <li>A Felek a jelen ÁSZF-fel, illetve az annak alapján létrejött szerződéses jogviszonyokkal kapcsolatos jogvitáikat elsősorban békés úton, egyeztetés útján kívánják rendezni; ennek eredménytelensége esetén a jogvita elbírálására a hatáskörrel és illetékességgel rendelkező magyar bíróság jogosult.</li>
            </ol>
            <p className="font-mono text-xs text-muted pt-4 border-t border-line">Utolsó módosítás dátuma: 2026. 07. 20.</p>
          </section>

        </div>
      </div>
    </main>
  );
}
