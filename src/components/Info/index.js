import React from "react";
import { FormattedHTMLMessage } from "react-intl";
import M from "../AddMessageId";

const Info = () => (
  <>
    <h3 className="text-center">
      <M>
        <FormattedHTMLMessage
          key="title"
          defaultMessage="Further Information"
        />
      </M>
    </h3>
    <M>
      <FormattedHTMLMessage
        key="text"
        tagName="div"
        defaultMessage='<p>Money, credit and central bank interest rates is a digital publication produced by European Central Bank and the national central banks of the Eurosystem. The publication aims to make it easier to understand, use and compare euro area and national statistics. It presents the statistics visually, uses reader-friendly terms, is digitally reusable via the embed function and is available in 23 EU languages.</p>
<h4>Information on data</h4>
<p>The data are updated in real time and available from the <a href="http://sdw.ecb.europa.eu/">Statistical Data Warehouse</a>.</p>
<h4>Disclaimer</h4>
<p>Permission is hereby granted, free of charge, to any person obtaining a copy of the work and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions</p>
<p>The software is provided “as is”, without warranty of any kind.</p>
<p>In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the Software or the use or other dealings in the software.</p>
<p>The Software is built upon and made available by Eurostat. See also <a href="https://ec.europa.eu/info/legal-notice_en">Eurostat Disclaimer</a>.</p>
<p>The ECB/Eurostat does not take responsibility for any replication of the content of the Software, or any other form of redistribution.</p>
<p>Cover photo © Ipopba/iStock </p>

<p>The European System of Central Banks (ESCB) is committed to providing its statistics free of charge as a public good of high quality irrespective of any subsequent commercial or non-commercial use. All publicly available ESCB statistics may be reused free of charge on the condition that the source is quoted (e.g. “Source: euro area statistics”) and that the statistics (including metadata) are not modified.</p>
<h4><a href="http://www.euro.ecb.europa.eu/">The Eurosystem</a></h4>
<p><a href="http://www.nbb.be/">Nationale Bank van België/Banque Nationale de Belgique</a></p>
<p><a href="http://www.bundesbank.de/">Deutsche Bundesbank</a></p>
<p><a href="http://www.eestipank.ee/">Eesti Pank</a></p>
<p><a href="http://www.centralbank.ie/">Central Bank of Ireland</a></p>
<p><a href="http://www.bankofgreece.gr/">Bank of Greece</a></p>
<p><a href="http://www.bde.es/">Banco de España</a></p>
<p><a href="http://www.banque-france.fr/">Banque de France</a></p>
<p><a href="http://www.bancaditalia.it/">Banca d’Italia</a></p>
<p><a href="https://www.centralbank.cy/">Central Bank of Cyprus</a></p>
<p><a href="http://www.bank.lv/">Latvijas Banka</a></p>
<p><a href="http://www.lb.lt/">Lietuvos bankas</a></p>
<p><a href="http://www.bcl.lu/">Banque centrale du Luxembourg</a></p>
<p><a href="http://www.centralbankmalta.org/">Bank Ċentrali ta’ Malta/CentralBank of Malta</a></p>
<p><a href="http://www.dnb.nl/">De Nederlandsche Bank</a></p>
<p><a href="http://www.oenb.at/">Oesterreichische Nationalbank</a></p>
<p><a href="http://www.bportugal.pt/">Banco de Portugal</a></p>
<p><a href="http://www.bsi.si/">Banka Slovenije</a></p>
<p><a href="http://www.nbs.sk/">Národná banka Slovenska</a></p>
<p><a href="http://www.suomenpankki.fi/">Suomen Pankki – Finlands Bank</a></p>'
      />
    </M>
  </>
);

export default Info;
