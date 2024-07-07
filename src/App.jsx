import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MenuSilaSatu from "./pages/SilaSatu/MenuSilaSatu";
import MenuSilaDua from "./pages/SilaSatu/MenuSilaDua";
import MenuSilaTiga from "./pages/SilaSatu/MenuSilaTiga";
import MenuSilaEmpat from "./pages/SilaSatu/MenuSilaEmpat";
import SilaDuaDua from "./pages/SilaDua/SilaDuaDua";
import SilaDuaTiga from "./pages/SilaDua/SilaDuaTiga";
import SilaDuaSatu from "./pages/SilaDua/SilaDuaSatu";
import SilaDuaEmpat from "./pages/SilaDua/SilaDuaEmpat";
import SilaTigaEmpat from "./pages/SilaTiga/SilaTigaEmpat";
import SilaTigaTiga from "./pages/SilaTiga/SilaTigaTiga";
import SilaTigaDua from "./pages/SilaTiga/SilaTigaDua";
import SilaTigaSatu from "./pages/SilaTiga/SilaTigaSatu";
import SilaEmpatSatu from "./pages/SilaEmpat/SilaEmpatSatu";
import SilaEmpatDua from "./pages/SilaEmpat/SilaEmpatDua";
import SilaEmpatEmpat from "./pages/SilaEmpat/SilaEmpatEmpat";
import SilaEmpatTiga from "./pages/SilaEmpat/SilaEmpatTiga";
import SilaLimaSatu from "./pages/SilaLima/SilaLimaSatu";
import SilaLimaDua from "./pages/SilaLima/SilaLimaDua";
import SilaLimaTiga from "./pages/SilaLima/SilaLimaTiga";
import SilaLimaEmpat from "./pages/SilaLima/SilaLimaEmpat";
import UudSatu from "./pages/UUD/UUDSatu";
import UudDua from "./pages/UUD/UUDDua";
import UudTiga from "./pages/UUD/UUDTiga";
import UudEmpat from "./pages/UUD/UUDEmpat";
import UudDuaSatu from "./pages/UUDDua/UudSatu";
import UudDuaDua from "./pages/UUDDua/UudDua";
import UudDuaTiga from "./pages/UUDDua/UudTiga";
import UudDuaEmpat from "./pages/UUDDua/UudEmpat";
import LaguSatu from "./pages/BhinnekaSatu/LaguSatu";
import LaguDua from "./pages/BhinnekaSatu/LaguDua";
import LaguTiga from "./pages/BhinnekaSatu/LaguTiga";
import LaguEmpat from "./pages/BhinnekaSatu/LaguEmpat";
import TarianSatu from "./pages/BhinnekaDua/TarianSatu";
import TarianDua from "./pages/BhinnekaDua/TarianDua";
import TarianTiga from "./pages/BhinnekaDua/TarianTiga";
import TarianEmpat from "./pages/BhinnekaDua/TarianEmpat";
import TambangSatu from "./pages/BhinnekaTiga/TambangSatu";
import TambangDua from "./pages/BhinnekaTiga/TambangDua";
import TambangTiga from "./pages/BhinnekaTiga/TambangTiga";
import TambangEmpat from "./pages/BhinnekaTiga/TambangEmpat";
import SatwaSatu from "./pages/BhinnekaEmpat/SatwaSatu";
import SatwaDua from "./pages/BhinnekaEmpat/SatwaDua";
import SatwaTiga from "./pages/BhinnekaEmpat/SatwaTiga";
import SatwaEmpat from "./pages/BhinnekaEmpat/SatwaEmpat";
import KulinerSatu from "./pages/NkriSatu/KulinerSatu";
import KulinerEmpat from "./pages/NkriSatu/KulinerEmpat";
import KulinerTiga from "./pages/NkriSatu/KulinerTiga";
import KulinerDua from "./pages/NkriSatu/KulinerDua";
import TradisiSatu from "./pages/NkriDua/TradisiSatu";
import TradisiDua from "./pages/NkriDua/TradisiDua";
import TradisiTiga from "./pages/NkriDua/TradisiTiga";
import TradisiEmpat from "./pages/NkriDua/TradisiEmpat";
import Pancasila from "./pages/AllMainPage/Pancasila";
import UudPage from "./pages/AllMainPage/UudPage";
import Bhinneka from "./pages/AllMainPage/Bhinneka";
import BeritaPage from "./pages/AllMainPage/BeritaPage";
import NkriPage from "./pages/AllMainPage/NkriPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/pancasila" element={<Pancasila />} />
        <Route path="/undang-undang-dasar-1945" element={<UudPage />} />
        <Route path="/bti" element={<Bhinneka />} />

        <Route
          path="/negara-kesatuan-republik-indonesia"
          element={<NkriPage />}
        />
        <Route path="/berita" element={<BeritaPage />} />

        {/* Sila Satu */}
        <Route path="/sila-satu-1" element={<MenuSilaSatu />} />
        <Route path="/sila-satu-2" element={<MenuSilaDua />} />
        <Route path="/sila-satu-3" element={<MenuSilaTiga />} />
        <Route path="/sila-satu-4" element={<MenuSilaEmpat />} />

        {/* Sila Dua */}
        <Route path="/sila-dua-1" element={<SilaDuaSatu />} />
        <Route path="/sila-dua-2" element={<SilaDuaDua />} />
        <Route path="/sila-dua-3" element={<SilaDuaTiga />} />
        <Route path="/sila-dua-4" element={<SilaDuaEmpat />} />
        {/* Sila Tiga */}
        <Route path="/sila-tiga-1" element={<SilaTigaSatu />} />
        <Route path="/sila-tiga-2" element={<SilaTigaDua />} />
        <Route path="/sila-tiga-3" element={<SilaTigaTiga />} />
        <Route path="/sila-tiga-4" element={<SilaTigaEmpat />} />
        {/* Sila Empat */}
        <Route path="/sila-empat-1" element={<SilaEmpatSatu />} />
        <Route path="/sila-empat-2" element={<SilaEmpatDua />} />
        <Route path="/sila-empat-3" element={<SilaEmpatTiga />} />
        <Route path="/sila-empat-4" element={<SilaEmpatEmpat />} />

        {/* Sila Lima */}
        <Route path="/sila-lima-1" element={<SilaLimaSatu />} />
        <Route path="/sila-lima-2" element={<SilaLimaDua />} />
        <Route path="/sila-lima-3" element={<SilaLimaTiga />} />
        <Route path="/sila-lima-4" element={<SilaLimaEmpat />} />
        {/* UUD */}
        <Route path="/uud-1" element={<UudSatu />} />
        <Route path="/uud-2" element={<UudDua />} />
        <Route path="/uud-3" element={<UudTiga />} />
        <Route path="/uud-4" element={<UudEmpat />} />

        {/* UUD 2 */}
        <Route path="/bahasa-1" element={<UudDuaSatu />} />
        <Route path="/bahasa-2" element={<UudDuaDua />} />
        <Route path="/bahasa-3" element={<UudDuaTiga />} />
        <Route path="/bahasa-4" element={<UudDuaEmpat />} />

        {/* Bhineka 1 */}
        <Route path="/lagu-1" element={<LaguSatu />} />
        <Route path="/lagu-2" element={<LaguDua />} />
        <Route path="/lagu-3" element={<LaguTiga />} />
        <Route path="/lagu-4" element={<LaguEmpat />} />

        {/* Bhineka 2 */}
        <Route path="/tarian-1" element={<TarianSatu />} />
        <Route path="/tarian-2" element={<TarianDua />} />
        <Route path="/tarian-3" element={<TarianTiga />} />
        <Route path="/tarian-4" element={<TarianEmpat />} />

        {/* Bhineka 3 */}
        <Route path="/tambang-1" element={<TambangSatu />} />
        <Route path="/tambang-2" element={<TambangDua />} />
        <Route path="/tambang-3" element={<TambangTiga />} />
        <Route path="/tambang-4" element={<TambangEmpat />} />

        {/* Bhineka 4 */}
        <Route path="/satwa-1" element={<SatwaSatu />} />
        <Route path="/satwa-2" element={<SatwaDua />} />
        <Route path="/satwa-3" element={<SatwaTiga />} />
        <Route path="/satwa-4" element={<SatwaEmpat />} />

        {/* NKRI 1 */}
        <Route path="/kuliner-1" element={<KulinerSatu />} />
        <Route path="/kuliner-2" element={<KulinerDua />} />
        <Route path="/kuliner-3" element={<KulinerTiga />} />
        <Route path="/kuliner-4" element={<KulinerEmpat />} />

        {/* NKRI 2 */}
        <Route path="/tradisi-1" element={<TradisiSatu />} />
        <Route path="/tradisi-2" element={<TradisiDua />} />
        <Route path="/tradisi-3" element={<TradisiTiga />} />
        <Route path="/tradisi-4" element={<TradisiEmpat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
