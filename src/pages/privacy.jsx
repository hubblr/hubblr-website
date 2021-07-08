import React from 'react';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import MainPageDarkLayout from '../components/layouts/MainPageDarkLayout';
import NavBarMain from '../components/nav-bar/NavBarMain';
import '../css/text-page-styles.scss';
import NavBarContactButton from '../components/nav-bar/NavBarContactButton';
import SEO from '../components/seo/Seo';

/* eslint-disable */
function PrivacyPolicyPage() {
  return (
    <LayoutWrapper>
      <MainPageDarkLayout>
        <NavBarMain
          showNavBar
          showAlways
          classNameProp="sticky w-full navbar-background-blur animate top-0 mb-4"
          desktopRightContent={
            <div className="flex justify-end items-center">
              <NavBarContactButton />
            </div>
          }
        />
        <SEO title="privacy.seo.title" />
        <div className="text-content container mx-auto mt-10">
          <h1 className="adsimple-311232323">Datenschutzerklärung</h1>
          <h2 className="adsimple-311232323">Datenschutz</h2>
          <p>
            Wir haben diese Datenschutzerklärung (Fassung 18.11.2020-311232323) verfasst, um Ihnen
            gemäß der Vorgaben der{' '}
            <a
              className="adsimple-311232323"
              href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679&amp;tid=311232323"
              target="_blank"
              rel="noopener"
            >
              Datenschutz-Grundverordnung (EU) 2016/679
            </a>{' '}
            zu erklären, welche Informationen wir sammeln, wie wir Daten verwenden und welche
            Entscheidungsmöglichkeiten Sie als Besucher dieser Webseite haben.
          </p>
          <p>
            Leider liegt es in der Natur der Sache, dass diese Erklärungen sehr technisch klingen,
            wir haben uns bei der Erstellung jedoch bemüht die wichtigsten Dinge so einfach und klar
            wie möglich zu beschreiben.
          </p>
          <h2 className="adsimple-311232323">Automatische Datenspeicherung</h2>
          <p>
            Wenn Sie heutzutage Webseiten besuchen, werden gewisse Informationen automatisch
            erstellt und gespeichert, so auch auf dieser Webseite.
          </p>
          <p>
            Wenn Sie unsere Webseite so wie jetzt gerade besuchen, speichert unser Webserver
            (Computer auf dem diese Webseite gespeichert ist) automatisch Daten wie
          </p>
          <ul className="adsimple-311232323">
            <li className="adsimple-311232323">die Adresse (URL) der aufgerufenen Webseite</li>
            <li className="adsimple-311232323">Browser und Browserversion</li>
            <li className="adsimple-311232323">das verwendete Betriebssystem</li>
            <li className="adsimple-311232323">
              die Adresse (URL) der zuvor besuchten Seite (Referrer URL)
            </li>
            <li className="adsimple-311232323">
              den Hostname und die IP-Adresse des Geräts von welchem aus zugegriffen wird
            </li>
            <li className="adsimple-311232323">Datum und Uhrzeit</li>
          </ul>
          <p>in Dateien (Webserver-Logfiles).</p>
          <p>
            In der Regel werden Webserver-Logfiles zwei Wochen gespeichert und danach automatisch
            gelöscht. Wir geben diese Daten nicht weiter, können jedoch nicht ausschließen, dass
            diese Daten beim Vorliegen von rechtswidrigem Verhalten eingesehen werden.
          </p>
          <h2 className="adsimple-311232323">Cookies</h2>
          <p>
            Unsere Website verwendet HTTP-Cookies um nutzerspezifische Daten zu speichern.
            <br />
            Im Folgenden erklären wir, was Cookies sind und warum Sie genutzt werden, damit Sie die
            folgende Datenschutzerklärung besser verstehen.
          </p>
          <h3 className="adsimple-311232323">Was genau sind Cookies?</h3>
          <p>
            Immer wenn Sie durch das Internet surfen, verwenden Sie einen Browser. Bekannte Browser
            sind beispielsweise Chrome, Safari, Firefox, Internet Explorer und Microsoft Edge. Die
            meisten Webseiten speichern kleine Text-Dateien in Ihrem Browser. Diese Dateien nennt
            man Cookies.
          </p>
          <p>
            Eines ist nicht von der Hand zu weisen: Cookies sind echt nützliche Helferlein. Fast
            alle Webseiten verwenden Cookies. Genauer gesprochen sind es HTTP-Cookies, da es auch
            noch andere Cookies für andere Anwendungsbereiche gibt. HTTP-Cookies sind kleine
            Dateien, die von unserer Website auf Ihrem Computer gespeichert werden. Diese
            Cookie-Dateien werden automatisch im Cookie-Ordner, quasi dem &#8220;Hirn&#8221; Ihres
            Browsers, untergebracht. Ein Cookie besteht aus einem Namen und einem Wert. Bei der
            Definition eines Cookies müssen zusätzlich ein oder mehrere Attribute angegeben werden.
          </p>
          <p>
            Cookies speichern gewisse Nutzerdaten von Ihnen, wie beispielsweise Sprache oder
            persönliche Seiteneinstellungen. Wenn Sie unsere Seite wieder aufrufen, übermittelt Ihr
            Browser die „userbezogenen“ Informationen an unsere Seite zurück. Dank der Cookies weiß
            unsere Website, wer Sie sind und bietet Ihnen Ihre gewohnte Standardeinstellung. In
            einigen Browsern hat jedes Cookie eine eigene Datei, in anderen wie beispielsweise
            Firefox sind alle Cookies in einer einzigen Datei gespeichert.
          </p>
          <p>
            Es gibt sowohl Erstanbieter Cookies als auch Drittanbieter-Cookies. Erstanbieter-Cookies
            werden direkt von unserer Seite erstellt, Drittanbieter-Cookies werden von
            Partner-Webseiten (z.B. Google Analytics) erstellt. Jedes Cookie ist individuell zu
            bewerten, da jedes Cookie andere Daten speichert. Auch die Ablaufzeit eines Cookies
            variiert von ein paar Minuten bis hin zu ein paar Jahren. Cookies sind keine
            Software-Programme und enthalten keine Viren, Trojaner oder andere „Schädlinge“. Cookies
            können auch nicht auf Informationen Ihres PCs zugreifen.
          </p>
          <p>So können zum Beispiel Cookie-Daten aussehen:</p>
          <ul className="adsimple-311232323">
            <li className="adsimple-311232323">Name: _ga</li>
            <li className="adsimple-311232323">Ablaufzeit: 2 Jahre</li>
            <li className="adsimple-311232323">Verwendung: Unterscheidung der Webseitenbesucher</li>
            <li className="adsimple-311232323">
              Beispielhafter Wert: GA1.2.1326744211.152311232323
            </li>
          </ul>
          <p>Ein Browser sollte folgende Mindestgrößen unterstützen:</p>
          <ul className="adsimple-311232323">
            <li className="adsimple-311232323">
              Ein Cookie soll mindestens 4096 Bytes enthalten können
            </li>
            <li className="adsimple-311232323">
              Pro Domain sollen mindestens 50 Cookies gespeichert werden können
            </li>
            <li className="adsimple-311232323">
              Insgesamt sollen mindestens 3000 Cookies gespeichert werden können
            </li>
          </ul>
          <h3 className="adsimple-311232323">Welche Arten von Cookies gibt es?</h3>
          <p>
            Die Frage welche Cookies wir im Speziellen verwenden, hängt von den verwendeten Diensten
            ab und wird in der folgenden Abschnitten der Datenschutzerklärung geklärt. An dieser
            Stelle möchten wir kurz auf die verschiedenen Arten von HTTP-Cookies eingehen.
          </p>
          <p>Man kann 4 Arten von Cookies unterscheiden:</p>
          <p>
            <strong className="adsimple-311232323">
              Unbedingt notwendige Cookies
              <br />
            </strong>
            Diese Cookies sind nötig, um grundlegende Funktionen der Website sicherzustellen. Zum
            Beispiel braucht es diese Cookies, wenn ein User ein Produkt in den Warenkorb legt, dann
            auf anderen Seiten weitersurft und später erst zur Kasse geht. Durch diese Cookies wird
            der Warenkorb nicht gelöscht, selbst wenn der User sein Browserfenster schließt.
          </p>
          <p>
            <strong className="adsimple-311232323">
              Funktionelle Cookies
              <br />
            </strong>
            Diese Cookies sammeln Infos über das Userverhalten und ob der User etwaige
            Fehlermeldungen bekommt. Zudem werden mithilfe dieser Cookies auch die Ladezeit und das
            Verhalten der Website bei verschiedenen Browsern gemessen.
          </p>
          <p>
            <strong className="adsimple-311232323">
              Zielorientierte Cookies
              <br />
            </strong>
            Diese Cookies sorgen für eine bessere Nutzerfreundlichkeit. Beispielsweise werden
            eingegebene Standorte, Schriftgrößen oder Formulardaten gespeichert.
          </p>
          <p>
            <strong className="adsimple-311232323">
              Werbe-Cookies
              <br />
            </strong>
            Diese Cookies werden auch Targeting-Cookies genannt. Sie dienen dazu dem User
            individuell angepasste Werbung zu liefern. Das kann sehr praktisch, aber auch sehr
            nervig sein.
          </p>
          <p>
            Üblicherweise werden Sie beim erstmaligen Besuch einer Webseite gefragt, welche dieser
            Cookiearten Sie zulassen möchten. Und natürlich wird diese Entscheidung auch in einem
            Cookie gespeichert.
          </p>
          <h3 className="adsimple-311232323">Wie kann ich Cookies löschen?</h3>
          <p>
            Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst. Unabhängig von welchem
            Service oder welcher Website die Cookies stammen, haben Sie immer die Möglichkeit
            Cookies zu löschen, nur teilweise zuzulassen oder zu deaktivieren. Zum Beispiel können
            Sie Cookies von Drittanbietern blockieren, aber alle anderen Cookies zulassen.
          </p>
          <p>
            Wenn Sie feststellen möchten, welche Cookies in Ihrem Browser gespeichert wurden, wenn
            Sie Cookie-Einstellungen ändern oder löschen wollen, können Sie dies in Ihren
            Browser-Einstellungen finden:
          </p>
          <p>
            <a
              className="adsimple-311232323"
              href="https://support.google.com/chrome/answer/95647?tid=311232323"
              target="_blank"
              rel="noopener"
            >
              Chrome: Cookies in Chrome löschen, aktivieren und verwalten
            </a>
          </p>
          <p>
            <a
              className="adsimple-311232323"
              href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=311232323"
              target="_blank"
              rel="noopener"
            >
              Safari: Verwalten von Cookies und Websitedaten mit Safari
            </a>
          </p>
          <p>
            <a
              className="adsimple-311232323"
              href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=311232323"
              target="_blank"
              rel="noopener"
            >
              Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer
              abgelegt haben
            </a>
          </p>
          <p>
            <a
              className="adsimple-311232323"
              href="https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=311232323"
              target="_blank"
              rel="noopener"
            >
              Internet Explorer: Löschen und Verwalten von Cookies
            </a>
          </p>
          <p>
            <a
              className="adsimple-311232323"
              href="https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=311232323"
              target="_blank"
              rel="noopener"
            >
              Microsoft Edge: Löschen und Verwalten von Cookies
            </a>
          </p>
          <p>
            Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so
            einrichten, dass er Sie immer informiert, wenn ein Cookie gesetzt werden soll. So können
            Sie bei jedem einzelnen Cookie entscheiden, ob Sie das Cookie erlauben oder nicht. Die
            Vorgangsweise ist je nach Browser verschieden. Am besten ist es Sie suchen die Anleitung
            in Google mit dem Suchbegriff “Cookies löschen Chrome” oder &#8220;Cookies deaktivieren
            Chrome&#8221; im Falle eines Chrome Browsers oder tauschen das Wort &#8220;Chrome&#8221;
            gegen den Namen Ihres Browsers, z.B. Edge, Firefox, Safari aus.
          </p>
          <h3 className="adsimple-311232323">Wie sieht es mit meinem Datenschutz aus?</h3>
          <p>
            Seit 2009 gibt es die sogenannten „Cookie-Richtlinien“. Darin ist festgehalten, dass das
            Speichern von Cookies eine Einwilligung von Ihnen verlangt. Innerhalb der EU-Länder gibt
            es allerdings noch sehr unterschiedliche Reaktionen auf diese Richtlinien. In
            Deutschland wurden die Cookie-Richtlinien nicht als nationales Recht umgesetzt.
            Stattdessen erfolgte die Umsetzung dieser Richtlinie weitgehend in § 15 Abs.3 des
            Telemediengesetzes (TMG).
          </p>
          <p>
            Wenn Sie mehr über Cookies wissen möchten und technischen Dokumentationen nicht scheuen,
            empfehlen wir{' '}
            <a
              className="adsimple-311232323"
              href="https://tools.ietf.org/html/rfc6265"
              target="_blank"
              rel="nofollow noopener"
            >
              https://tools.ietf.org/html/rfc6265
            </a>
            , dem Request for Comments der Internet Engineering Task Force (IETF) namens &#8220;HTTP
            State Management Mechanism&#8221;.
          </p>
          <h2 className="adsimple-311232323">Speicherung persönlicher Daten</h2>
          <p>
            Persönliche Daten, die Sie uns auf dieser Website elektronisch übermitteln, wie zum
            Beispiel Name, E-Mail-Adresse, Adresse oder andere persönlichen Angaben im Rahmen der
            Übermittlung eines Formulars oder Kommentaren im Blog, werden von uns gemeinsam mit dem
            Zeitpunkt und der IP-Adresse nur zum jeweils angegebenen Zweck verwendet, sicher
            verwahrt und nicht an Dritte weitergegeben.
          </p>
          <p>
            Wir nutzen Ihre persönlichen Daten somit nur für die Kommunikation mit jenen Besuchern,
            die Kontakt ausdrücklich wünschen und für die Abwicklung der auf dieser Webseite
            angebotenen Dienstleistungen und Produkte. Wir geben Ihre persönlichen Daten ohne
            Zustimmung nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim
            Vorliegen von rechtswidrigem Verhalten eingesehen werden.
          </p>
          <p>
            Wenn Sie uns persönliche Daten per E-Mail schicken &#8211; somit abseits dieser Webseite
            &#8211; können wir keine sichere Übertragung und den Schutz Ihrer Daten garantieren. Wir
            empfehlen Ihnen, vertrauliche Daten niemals unverschlüsselt per E-Mail zu übermitteln.
          </p>
          <p>
            Die Rechtsgrundlage besteht nach{' '}
            <a
              className="adsimple-311232323"
              href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=311232323"
              target="_blank"
              rel="noopener"
            >
              Artikel 6 Absatz 1 a DSGVO
            </a>{' '}
            (Rechtmäßigkeit der Verarbeitung) darin, dass Sie uns die Einwilligung zur Verarbeitung
            der von Ihnen eingegebenen Daten geben. Sie können diesen Einwilligung jederzeit
            widerrufen &#8211; eine formlose E-Mail reicht aus, Sie finden unsere Kontaktdaten im
            Impressum.
          </p>
          <h2 className="adsimple-311232323">Rechte laut Datenschutzgrundverordnung</h2>
          <p>Ihnen stehen laut den Bestimmungen der DSGVO grundsätzlich die folgende Rechte zu:</p>
          <ul className="adsimple-311232323">
            <li className="adsimple-311232323">Recht auf Berichtigung (Artikel 16 DSGVO)</li>
            <li className="adsimple-311232323">
              Recht auf Löschung („Recht auf Vergessenwerden“) (Artikel 17 DSGVO)
            </li>
            <li className="adsimple-311232323">
              Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)
            </li>
            <li className="adsimple-311232323">
              Recht auf Benachrichtigung &#8211; Mitteilungspflicht im Zusammenhang mit der
              Berichtigung oder Löschung personenbezogener Daten oder der Einschränkung der
              Verarbeitung (Artikel 19 DSGVO)
            </li>
            <li className="adsimple-311232323">
              Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)
            </li>
            <li className="adsimple-311232323">Widerspruchsrecht (Artikel 21 DSGVO)</li>
            <li className="adsimple-311232323">
              Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung —
              einschließlich Profiling — beruhenden Entscheidung unterworfen zu werden (Artikel 22
              DSGVO)
            </li>
          </ul>
          <p>
            Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt
            oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind,
            können Sie sich an die{' '}
            <a
              className="adsimple-311232323"
              className="311232323"
              href="https://www.bfdi.bund.de"
              target="_blank"
              rel="noopener"
            >
              Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)
            </a>{' '}
            wenden.
          </p>
          <h2 className="adsimple-311232323">Auswertung des Besucherverhaltens</h2>
          <p>
            In der folgenden Datenschutzerklärung informieren wir Sie darüber, ob und wie wir Daten
            Ihres Besuchs dieser Website auswerten. Die Auswertung der gesammelten Daten erfolgt in
            der Regel anonym und wir können von Ihrem Verhalten auf dieser Website nicht auf Ihre
            Person schließen.
          </p>
          <p>
            Mehr über Möglichkeiten dieser Auswertung der Besuchsdaten zu widersprechen erfahren Sie
            in der folgenden Datenschutzerklärung.
          </p>
          <h2 className="adsimple-311232323">TLS-Verschlüsselung mit https</h2>
          <p>
            Wir verwenden https um Daten abhörsicher im Internet zu übertragen (Datenschutz durch
            Technikgestaltung{' '}
            <a
              className="adsimple-311232323"
              href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=311232323"
              target="_blank"
              rel="noopener"
            >
              Artikel 25 Absatz 1 DSGVO
            </a>
            ). Durch den Einsatz von TLS (Transport Layer Security), einem Verschlüsselungsprotokoll
            zur sicheren Datenübertragung im Internet können wir den Schutz vertraulicher Daten
            sicherstellen. Sie erkennen die Benutzung dieser Absicherung der Datenübertragung am
            kleinen Schloßsymbol links oben im Browser und der Verwendung des Schemas https (anstatt
            http) als Teil unserer Internetadresse.
          </p>
          <h2 className="adsimple-311232323">Google Fonts Lokal Datenschutzerklärung</h2>
          <p>
            Auf unserer Website nutzen wir Google Fonts der Firma Google Inc. Für den europäischen
            Raum ist das Unternehmen Google Ireland Limited (Gordon House, Barrow Street Dublin 4,
            Irland) verantwortlich. Wir haben die Google-Schriftarten lokal, d.h. auf unserem
            Webserver &#8211; nicht auf den Servern von Google &#8211; eingebunden. Dadurch gibt es
            keine Verbindung zu Google-Servern und somit auch keine Datenübertragung oder
            Speicherung.
          </p>
          <h3 className="adsimple-311232323">Was sind Google Fonts?</h3>
          <p>
            Früher nannte man Google Fonts auch Google Web Fonts. Dabei handelt es sich um ein
            interaktives Verzeichnis mit über 800 Schriftarten, die{' '}
            <a
              className="adsimple-311232323"
              href="https://de.wikipedia.org/wiki/Google_LLC?tid=311232323"
            >
              Google
            </a>{' '}
            kostenlos bereitstellt. Mit Google Fonts könnte man Schriften nutzen, ohne sie auf den
            eigenen Server hochzuladen. Doch um diesbezüglich jede Informationsübertragung zu
            Google-Servern zu unterbinden, haben wir die Schriftarten auf unseren Server
            heruntergeladen. Auf diese Weise handeln wir datenschutzkonform und senden keine Daten
            an Google Fonts weiter.
          </p>
          <p>
            Anders als andere Web-Schriften erlaubt uns Google uneingeschränkten Zugriff auf alle
            Schriftarten. Wir können also unlimitiert auf ein Meer an Schriftarten zugreifen und so
            das Optimum für unsere Webseite rausholen. Mehr zu Google Fonts und weiteren Fragen
            finden Sie auf{' '}
            <a
              className="adsimple-311232323"
              href="https://developers.google.com/fonts/faq?tid=311232323"
            >
              https://developers.google.com/fonts/faq?tid=311232323
            </a>
            .
          </p>
          <h2 className="adsimple-311232323">Google Analytics Datenschutzerklärung</h2>
          <p>
            Wir verwenden auf unserer Website das Analyse-Tracking Tool Google Analytics (GA) des
            amerikanischen Unternehmens Google Inc. Für den europäischen Raum ist das Unternehmen
            Google Ireland Limited (Gordon House, Barrow Street Dublin 4, Irland) für alle
            Google-Dienste verantwortlich. Google Analytics sammelt Daten über Ihre Handlungen auf
            unserer Website. Wenn Sie beispielsweise einen Link anklicken, wird diese Aktion in
            einem Cookie gespeichert und an Google Analytics versandt. Mithilfe der Berichte, die
            wir von Google Analytics erhalten, können wir unsere Website und unser Service besser an
            Ihre Wünsche anpassen. Im Folgenden gehen wir näher auf das Tracking Tool ein und
            informieren Sie vor allem darüber, welche Daten gespeichert werden und wie Sie das
            verhindern können.
          </p>
          <h3 className="adsimple-311232323">Was ist Google Analytics?</h3>
          <p>
            Google Analytics ist ein Trackingtool, das der Datenverkehrsanalyse unserer Website
            dient. Damit Google Analytics funktioniert, wird ein Tracking-Code in den Code unserer
            Website eingebaut. Wenn Sie unsere Website besuchen, zeichnet dieser Code verschiedene
            Handlungen auf, die Sie auf unserer Website ausführen. Sobald Sie unsere Website
            verlassen, werden diese Daten an die Google-Analytics-Server gesendet und dort
            gespeichert.
          </p>
          <p>
            Google verarbeitet die Daten und wir bekommen Berichte über Ihr Userverhalten. Dabei
            kann es sich unter anderem um folgende Berichte handeln:
          </p>
          <ul className="adsimple-311232323">
            <li className="adsimple-311232323">
              Zielgruppenberichte: Über Zielgruppenberichte lernen wir unsere User besser kennen und
              wissen genauer, wer sich für unser Service interessiert.
            </li>
            <li className="adsimple-311232323">
              Anzeigeberichte: Durch Anzeigeberichte können wir unsere Onlinewerbung leichter
              analysieren und verbessern.
            </li>
            <li className="adsimple-311232323">
              Akquisitionsberichte: Akquisitionsberichte geben uns hilfreiche Informationen darüber,
              wie wir mehr Menschen für unser Service begeistern können.
            </li>
            <li className="adsimple-311232323">
              Verhaltensberichte: Hier erfahren wir, wie Sie mit unserer Website interagieren. Wir
              können nachvollziehen welchen Weg Sie auf unserer Seite zurücklegen und welche Links
              Sie anklicken.
            </li>
            <li className="adsimple-311232323">
              Conversionsberichte: Conversion nennt man einen Vorgang, bei dem Sie aufgrund einer
              Marketing-Botschaft eine gewünschte Handlung ausführen. Zum Beispiel, wenn Sie von
              einem reinen Websitebesucher zu einem Käufer oder Newsletter-Abonnent werden. Mithilfe
              dieser Berichte erfahren wir mehr darüber, wie unsere Marketing-Maßnahmen bei Ihnen
              ankommen. So wollen wir unsere Conversionrate steigern.
            </li>
            <li className="adsimple-311232323">
              Echtzeitberichte: Hier erfahren wir immer sofort, was gerade auf unserer Website
              passiert. Zum Beispiel sehen wir wie viele User gerade diesen Text lesen.
            </li>
          </ul>
          <h3 className="adsimple-311232323">
            Warum verwenden wir Google Analytics auf unserer Webseite?
          </h3>
          <p>
            Unser Ziel mit dieser Website ist klar: Wir wollen Ihnen das bestmögliche Service
            bieten. Die Statistiken und Daten von Google Analytics helfen uns dieses Ziel zu
            erreichen.
          </p>
          <p>
            Die statistisch ausgewerteten Daten zeigen uns ein klares Bild von den Stärken und
            Schwächen unserer Website. Einerseits können wir unsere Seite so optimieren, dass sie
            von interessierten Menschen auf Google leichter gefunden wird. Andererseits helfen uns
            die Daten, Sie als Besucher besser zu verstehen. Wir wissen somit sehr genau, was wir an
            unserer Website verbessern müssen, um Ihnen das bestmögliche Service zu bieten. Die
            Daten dienen uns auch, unsere Werbe- und Marketing-Maßnahmen individueller und
            kostengünstiger durchzuführen. Schließlich macht es nur Sinn, unsere Produkte und
            Dienstleistungen Menschen zu zeigen, die sich dafür interessieren.
          </p>
          <h3 className="adsimple-311232323">
            Welche Daten werden von Google Analytics gespeichert?
          </h3>
          <p>
            Google Analytics erstellt mithilfe eines Tracking-Codes eine zufällige, eindeutige ID,
            die mit Ihrem Browser-Cookie verbunden ist. So erkennt Sie Google Analytics als neuen
            User. Wenn Sie das nächste Mal unsere Seite besuchen, werden Sie als „wiederkehrender“
            User erkannt. Alle gesammelten Daten werden gemeinsam mit dieser User-ID gespeichert. So
            ist es überhaupt erst möglich pseudonyme Userprofile auszuwerten.
          </p>
          <p>
            Durch Kennzeichnungen wie Cookies und App-Instanz-IDs werden Ihre Interaktionen auf
            unserer Website gemessen. Interaktionen sind alle Arten von Handlungen, die Sie auf
            unserer Website ausführen. Wenn Sie auch andere Google-Systeme (wie z.B. ein
            Google-Konto) nützen, können über Google Analytics generierte Daten mit
            Drittanbieter-Cookies verknüpft werden. Google gibt keine Google Analytics-Daten weiter,
            außer wir als Websitebetreiber genehmigen das. Zu Ausnahmen kann es kommen, wenn es
            gesetzlich erforderlich ist.
          </p>
          <p>Folgende Cookies werden von Google Analytics verwendet:</p>
          <p>
            <strong className="adsimple-311232323">Name:</strong> _ga
            <br />
            <strong className="adsimple-311232323">Wert: </strong>2.1326744211.152311232323-5
            <br />
            <strong className="adsimple-311232323">Verwendungszweck:</strong> Standardmäßig
            verwendet analytics.js das Cookie _ga, um die User-ID zu speichern. Grundsätzlich dient
            es zur Unterscheidung der Webseitenbesucher.
            <br />
            <strong className="adsimple-311232323">Ablaufdatum:</strong> nach 2 Jahren
          </p>
          <p>
            <strong className="adsimple-311232323">Name:</strong> _gid
            <br />
            <strong className="adsimple-311232323">Wert: </strong>2.1687193234.152311232323-1
            <br />
            <strong className="adsimple-311232323">Verwendungszweck:</strong> Das Cookie dient auch
            zur Unterscheidung der Webseitenbesucher.
            <br />
            <strong className="adsimple-311232323">Ablaufdatum:</strong> nach 24 Stunden
          </p>
          <p>
            <strong className="adsimple-311232323">Name:</strong> _gat_gtag_UA_&lt;property-id&gt;
            <br />
            <strong className="adsimple-311232323">Wert:</strong> 1<br />
            <strong className="adsimple-311232323">Verwendungszweck:</strong> Wird zum Senken der
            Anforderungsrate verwendet. Wenn Google Analytics über den Google Tag Manager
            bereitgestellt wird, erhält dieser Cookie den Namen _dc_gtm_ &lt;property-id&gt;.
            <br />
            <strong className="adsimple-311232323">Ablaufdatum: </strong>nach 1 Minute
          </p>
          <p>
            <strong className="adsimple-311232323">Name:</strong> AMP_TOKEN
            <br />
            <strong className="adsimple-311232323">Wert:</strong> keine Angaben
            <br />
            <strong className="adsimple-311232323">Verwendungszweck:</strong> Das Cookie hat einen
            Token, mit dem eine User ID vom AMP-Client-ID-Dienst abgerufen werden kann. Andere
            mögliche Werte weisen auf eine Abmeldung, eine Anfrage oder einen Fehler hin.
            <br />
            <strong className="adsimple-311232323">Ablaufdatum:</strong> nach 30 Sekunden bis zu
            einem Jahr
          </p>
          <p>
            <strong className="adsimple-311232323">Name:</strong> __utma
            <br />
            <strong className="adsimple-311232323">Wert: </strong>1564498958.1564498958.1564498958.1
            <br />
            <strong className="adsimple-311232323">Verwendungszweck:</strong> Mit diesem Cookie kann
            man Ihr Verhalten auf der Website verfolgen und die Leistung messen. Das Cookie wird
            jedes Mal aktualisiert, wenn Informationen an Google Analytics gesendet werden.
            <br />
            <strong className="adsimple-311232323">Ablaufdatum:</strong> nach 2 Jahren
          </p>
          <p>
            <strong className="adsimple-311232323">Name:</strong> __utmt
            <br />
            <strong className="adsimple-311232323">Wert:</strong> 1<br />
            <strong className="adsimple-311232323">Verwendungszweck:</strong> Das Cookie wird wie
            _gat_gtag_UA_&lt;property-id&gt; zum Drosseln der Anforderungsrate verwendet.
            <br />
            <strong className="adsimple-311232323">Ablaufdatum:</strong> nach 10 Minuten
          </p>
          <p>
            <strong className="adsimple-311232323">Name:</strong> __utmb
            <br />
            <strong className="adsimple-311232323">Wert: </strong>3.10.1564498958
            <br />
            <strong className="adsimple-311232323">Verwendungszweck:</strong> Dieses Cookie wird
            verwendet, um neue Sitzungen zu bestimmen. Es wird jedes Mal aktualisiert, wenn neue
            Daten bzw. Infos an Google Analytics gesendet werden.
            <br />
            <strong className="adsimple-311232323">Ablaufdatum:</strong> nach 30 Minuten
          </p>
          <p>
            <strong className="adsimple-311232323">Name:</strong> __utmc
            <br />
            <strong className="adsimple-311232323">Wert:</strong> 167421564
            <br />
            <strong className="adsimple-311232323">Verwendungszweck:</strong> Dieses Cookie wird
            verwendet, um neue Sitzungen für wiederkehrende Besucher festzulegen. Dabei handelt es
            sich um ein Session-Cookie, und es wird nur solange gespeichert, bis Sie den Browser
            wieder schließen.
            <br />
            <strong className="adsimple-311232323">Ablaufdatum:</strong> Nach Schließung des
            Browsers
          </p>
          <p>
            <strong className="adsimple-311232323">Name:</strong> __utmz
            <br />
            <strong className="adsimple-311232323">Wert:</strong>{' '}
            m|utmccn=(referral)|utmcmd=referral|utmcct=/
            <br />
            <strong className="adsimple-311232323">Verwendungszweck:</strong> Das Cookie wird
            verwendet, um die Quelle des Besucheraufkommens auf unserer Website zu identifizieren.
            Das heißt, das Cookie speichert, von wo Sie auf unsere Website gekommen sind. Das kann
            eine andere Seite bzw. eine Werbeschaltung gewesen sein.
            <br />
            <strong className="adsimple-311232323">Ablaufdatum:</strong> nach 6 Monaten
          </p>
          <p>
            <strong className="adsimple-311232323">Name:</strong> __utmv
            <br />
            <strong className="adsimple-311232323">Wert:</strong> keine Angabe
            <br />
            <strong className="adsimple-311232323">Verwendungszweck:</strong> Das Cookie wird
            verwendet, um benutzerdefinierte Userdaten zu speichern. Es wird immer aktualisiert,
            wenn Informationen an Google Analytics gesendet werden.
            <br />
            <strong className="adsimple-311232323">Ablaufdatum:</strong> nach 2 Jahren
          </p>
          <p>
            <strong className="adsimple-311232323">Anmerkung:</strong> Diese Aufzählung kann keinen
            Anspruch auf Vollständigkeit erheben, da Google die Wahl seiner Cookies immer wieder
            verändert.
          </p>
          <p>
            Hier zeigen wir Ihnen einen Überblick über die wichtigsten Daten, die mit Google
            Analytics erhoben werden:
          </p>
          <p>
            <strong className="adsimple-311232323">Heatmaps:</strong> Google legt sogenannte
            Heatmaps an. Über Heatmaps sieht man genau jene Bereiche, die Sie anklicken. So bekommen
            wir Informationen, wo Sie auf unserer Seite „unterwegs“ sind.
          </p>
          <p>
            <strong className="adsimple-311232323">Sitzungsdauer:</strong> Als Sitzungsdauer
            bezeichnet Google die Zeit, die Sie auf unserer Seite verbringen, ohne die Seite zu
            verlassen. Wenn Sie 20 Minuten inaktiv waren, endet die Sitzung automatisch.
          </p>
          <p>
            <strong className="adsimple-311232323">Absprungrate</strong> (engl. Bouncerate): Von
            einem Absprung ist die Rede, wenn Sie auf unserer Website nur eine Seite ansehen und
            dann unsere Website wieder verlassen.
          </p>
          <p>
            <strong className="adsimple-311232323">Kontoerstellung:</strong> Wenn Sie auf unserer
            Website ein Konto erstellen bzw. eine Bestellung machen, erhebt Google Analytics diese
            Daten.
          </p>
          <p>
            <strong className="adsimple-311232323">IP-Adresse:</strong> Die IP-Adresse wird nur in
            gekürzter Form dargestellt, damit keine eindeutige Zuordnung möglich ist.
          </p>
          <p>
            <strong className="adsimple-311232323">Standort:</strong> Über die IP-Adresse kann das
            Land und Ihr ungefährer Standort bestimmt werden. Diesen Vorgang bezeichnet man auch als
            IP- Standortbestimmung.
          </p>
          <p>
            <strong className="adsimple-311232323">Technische Informationen:</strong> Zu den
            technischen Informationen zählen unter anderem Ihr Browsertyp, Ihr Internetanbieter oder
            Ihre Bildschirmauflösung.
          </p>
          <p>
            <strong className="adsimple-311232323">Herkunftsquelle:</strong> Google Analytics
            beziehungsweise uns, interessiert natürlich auch über welche Website oder welche Werbung
            Sie auf unsere Seite gekommen sind.
          </p>
          <p>
            Weitere Daten sind Kontaktdaten, etwaige Bewertungen, das Abspielen von Medien (z.B.,
            wenn Sie ein Video über unsere Seite abspielen), das Teilen von Inhalten über Social
            Media oder das Hinzufügen zu Ihren Favoriten. Die Aufzählung hat keinen
            Vollständigkeitsanspruch und dient nur zu einer allgemeinen Orientierung der
            Datenspeicherung durch Google Analytics.
          </p>
          <h3 className="adsimple-311232323">Wie lange und wo werden die Daten gespeichert?</h3>
          <p>
            Google hat Ihre Server auf der ganzen Welt verteilt. Die meisten Server befinden sich in
            Amerika und folglich werden Ihre Daten meist auf amerikanischen Servern gespeichert.
            Hier können Sie genau nachlesen wo sich die Google-Rechenzentren befinden:{' '}
            <a
              className="adsimple-311232323"
              href="https://www.google.com/about/datacenters/inside/locations/?hl=de"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.google.com/about/datacenters/inside/locations/?hl=de
            </a>
          </p>
          <p>
            Ihre Daten werden auf verschiedenen physischen Datenträgern verteilt. Das hat den
            Vorteil, dass die Daten schneller abrufbar sind und vor Manipulation besser geschützt
            sind. In jedem Google-Rechenzentrum gibt es entsprechende Notfallprogramme für Ihre
            Daten. Wenn beispielsweise die Hardware bei Google ausfällt oder Naturkatastrophen
            Server lahmlegen, bleibt das Risiko einer Dienstunterbrechung bei Google dennoch gering.
          </p>
          <p>
            Standardisiert ist bei Google Analytics eine Aufbewahrungsdauer Ihrer Userdaten von 26
            Monaten eingestellt. Dann werden Ihre Userdaten gelöscht. Allerdings haben wir die
            Möglichkeit, die Aufbewahrungsdauer von Nutzdaten selbst zu wählen. Dafür stehen uns
            fünf Varianten zur Verfügung:
          </p>
          <ul className="adsimple-311232323">
            <li className="adsimple-311232323">Löschung nach 14 Monaten</li>
            <li className="adsimple-311232323">Löschung nach 26 Monaten</li>
            <li className="adsimple-311232323">Löschung nach 38 Monaten</li>
            <li className="adsimple-311232323">Löschung nach 50 Monaten</li>
            <li className="adsimple-311232323">Keine automatische Löschung</li>
          </ul>
          <p>
            Wenn der festgelegte Zeitraum abgelaufen ist, werden einmal im Monat die Daten gelöscht.
            Diese Aufbewahrungsdauer gilt für Ihre Daten, die mit Cookies, Usererkennung und
            Werbe-IDs (z.B. Cookies der DoubleClick-Domain) verknüpft sind. Berichtergebnisse
            basieren auf aggregierten Daten und werden unabhängig von Nutzerdaten gespeichert.
            Aggregierte Daten sind eine Zusammenschmelzung von Einzeldaten zu einer größeren
            Einheit.
          </p>
          <h3 className="adsimple-311232323">
            Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?
          </h3>
          <p>
            Nach dem Datenschutzrecht der Europäischen Union haben Sie das Recht, Auskunft über Ihre
            Daten zu erhalten, sie zu aktualisieren, zu löschen oder einzuschränken. Mithilfe des
            Browser-Add-ons zur Deaktivierung von Google Analytics-JavaScript (ga.js, analytics.js,
            dc.js) verhindern Sie, dass Google Analytics Ihre Daten verwendet. Das Browser-Add-on
            können Sie unter{' '}
            <a
              className="adsimple-311232323"
              href="https://tools.google.com/dlpage/gaoptout?hl=de"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://tools.google.com/dlpage/gaoptout?hl=de
            </a>{' '}
            runterladen und installieren. Beachten Sie bitte, dass durch dieses Add-on nur die
            Datenerhebung durch Google Analytics deaktiviert wird.
          </p>
          <p>
            Falls Sie grundsätzlich Cookies (unabhängig von Google Analytics) deaktivieren, löschen
            oder verwalten wollen, gibt es für jeden Browser eine eigene Anleitung:
          </p>
          <p>
            <a
              className="adsimple-311232323"
              href="https://support.google.com/chrome/answer/95647?tid=311232323"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chrome: Cookies in Chrome löschen, aktivieren und verwalten
            </a>
          </p>
          <p>
            <a
              className="adsimple-311232323"
              href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=311232323"
              target="_blank"
              rel="noopener noreferrer"
            >
              Safari: Verwalten von Cookies und Websitedaten mit Safari
            </a>
          </p>
          <p>
            <a
              className="adsimple-311232323"
              href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=311232323"
              target="_blank"
              rel="noopener noreferrer"
            >
              Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer
              abgelegt haben
            </a>
          </p>
          <p>
            <a
              className="adsimple-311232323"
              href="https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=311232323"
              target="_blank"
              rel="noopener noreferrer"
            >
              Internet Explorer: Löschen und Verwalten von Cookies
            </a>
          </p>
          <p>
            <a
              className="adsimple-311232323"
              href="https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=311232323"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Edge: Löschen und Verwalten von Cookies
            </a>
          </p>
          <p>
            Google Analytics ist aktiver Teilnehmer beim EU-U.S. Privacy Shield Framework, wodurch
            der korrekte und sichere Datentransfer persönlicher Daten geregelt wird. Mehr
            Informationen dazu finden Sie auf{' '}
            <a
              className="adsimple-311232323"
              href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI"
              target="_blank"
              rel="follow noopener noreferrer"
            >
              https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;tid=311232323
            </a>
            . Wir hoffen wir konnten Ihnen die wichtigsten Informationen rund um die
            Datenverarbeitung von Google Analytics näherbringen. Wenn Sie mehr über den
            Tracking-Dienst erfahren wollen, empfehlen wir diese beiden Links:{' '}
            <a
              className="adsimple-311232323"
              href="http://www.google.com/analytics/terms/de.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.google.com/analytics/terms/de.html
            </a>{' '}
            und{' '}
            <a
              className="adsimple-311232323"
              href="https://support.google.com/analytics/answer/6004245?hl=de"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://support.google.com/analytics/answer/6004245?hl=de
            </a>
            .
          </p>
          <h2 className="adsimple-311232323">
            Google Analytics Berichte zu demografischen Merkmalen und Interessen
          </h2>
          <p>
            Wir haben in Google Analytics die Funktionen für Werbeberichte eingeschaltet. Die
            Berichte zu demografischen Merkmalen und Interessen enthalten Angaben zu Alter,
            Geschlecht und Interessen. Damit können wir uns &#8211; ohne diese Daten einzelnen
            Personen zuordnen zu können &#8211; ein besseres Bild von unseren Nutzern machen. Mehr
            über die Werbefunktionen erfahren Sie{' '}
            <a
              className="adsimple-311232323"
              href="https://support.google.com/analytics/answer/3450482?hl=de_AT&amp;utm_id=ad"
              target="_blank"
              rel="noopener"
            >
              auf https://support.google.com/analytics/answer/3450482?hl=de_AT&amp;utm_id=ad
            </a>
            .
          </p>
          <p>
            Sie können die Nutzung der Aktivitäten und Informationen Ihres Google Kontos unter
            “Einstellungen für Werbung” auf{' '}
            <a className="adsimple-311232323" href="https://adssettings.google.com/authenticated">
              https://adssettings.google.com/authenticated
            </a>{' '}
            per Checkbox beenden.
          </p>
          <p style={{ marginTop: '15px' }}>
            Quelle: Erstellt mit dem{' '}
            <a
              title="Datenschutz Generator Deutschland"
              href="https://www.adsimple.de/datenschutz-generator/"
              target="_blank"
              rel="follow"
              style={{ textDecoration: 'none' }}
            >
              Datenschutz Generator
            </a>{' '}
            von AdSimple in Kooperation mit{' '}
            <a href="https://www.warkly.de" target="_blank" rel="follow" title="">
              warkly.de
            </a>
          </p>
        </div>
      </MainPageDarkLayout>
    </LayoutWrapper>
  );
}

export default PrivacyPolicyPage;
