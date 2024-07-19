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
import KontenSatuForm from "./pages/backend/konten/KontenSatuForm";
import BerandaForm from "./pages/backend/beranda/BerandaForm";
import NavbarForm from "./pages/backend/navbar/NavbarForm";
import KontenDuaForm from "./pages/backend/konten/KontenDuaForm";
import KontenTigaForm from "./pages/backend/konten/KontenTigaForm";
import KontenEmpatForm from "./pages/backend/konten/KontenEmpatForm";
import BeritaForm from "./pages/backend/berita/BeritaForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/konten-satu" element={<Pancasila />} />
        <Route path="/konten-dua" element={<UudPage />} />
        <Route path="/konten-tiga" element={<Bhinneka />} />

        <Route path="/konten-empat" element={<NkriPage />} />
        <Route path="/berita" element={<BeritaPage />} />

        {/* Sila Satu */}
        <Route path="/detail-satu-1" element={<MenuSilaSatu />} />
        <Route path="/detail-satu-2" element={<MenuSilaDua />} />
        <Route path="/detail-satu-3" element={<MenuSilaTiga />} />
        <Route path="/detail-satu-4" element={<MenuSilaEmpat />} />

        {/* Sila Dua */}
        <Route path="/detail-dua-1" element={<SilaDuaSatu />} />
        <Route path="/detail-dua-2" element={<SilaDuaDua />} />
        <Route path="/detail-dua-3" element={<SilaDuaTiga />} />
        <Route path="/detail-dua-4" element={<SilaDuaEmpat />} />
        {/* Sila Tiga */}
        <Route path="/detail-tiga-1" element={<SilaTigaSatu />} />
        <Route path="/detail-tiga-2" element={<SilaTigaDua />} />
        <Route path="/detail-tiga-3" element={<SilaTigaTiga />} />
        <Route path="/detail-tiga-4" element={<SilaTigaEmpat />} />
        {/* Sila Empat */}
        <Route path="/detail-empat-1" element={<SilaEmpatSatu />} />
        <Route path="/detail-empat-2" element={<SilaEmpatDua />} />
        <Route path="/detail-empat-3" element={<SilaEmpatTiga />} />
        <Route path="/detail-empat-4" element={<SilaEmpatEmpat />} />

        {/* Sila Lima */}
        <Route path="/detail-lima-1" element={<SilaLimaSatu />} />
        <Route path="/detail-lima-2" element={<SilaLimaDua />} />
        <Route path="/detail-lima-3" element={<SilaLimaTiga />} />
        <Route path="/detail-lima-4" element={<SilaLimaEmpat />} />
        {/* UUD */}
        <Route path="/detail-enam-1" element={<UudSatu />} />
        <Route path="/detail-enam-2" element={<UudDua />} />
        <Route path="/detail-enam-3" element={<UudTiga />} />
        <Route path="/detail-enam-4" element={<UudEmpat />} />

        {/* UUD 2 */}
        <Route path="/detail-tujuh-1" element={<UudDuaSatu />} />
        <Route path="/detail-tujuh-2" element={<UudDuaDua />} />
        <Route path="/detail-tujuh-3" element={<UudDuaTiga />} />
        <Route path="/detail-tujuh-4" element={<UudDuaEmpat />} />

        {/* Bhineka 1 */}
        <Route path="/detail-delapan-1" element={<LaguSatu />} />
        <Route path="/detail-delapan-2" element={<LaguDua />} />
        <Route path="/detail-delapan-3" element={<LaguTiga />} />
        <Route path="/detail-delapan-4" element={<LaguEmpat />} />

        {/* Bhineka 2 */}
        <Route path="/detail-sembilan-1" element={<TarianSatu />} />
        <Route path="/detail-sembilan-2" element={<TarianDua />} />
        <Route path="/detail-sembilan-3" element={<TarianTiga />} />
        <Route path="/detail-sembilan-4" element={<TarianEmpat />} />

        {/* Bhineka 3 */}
        <Route path="/detail-sepuluh-1" element={<TambangSatu />} />
        <Route path="/detail-sepuluh-2" element={<TambangDua />} />
        <Route path="/detail-sepuluh-3" element={<TambangTiga />} />
        <Route path="/detail-sepuluh-4" element={<TambangEmpat />} />

        {/* Bhineka 4 */}
        <Route path="/detail-sebelas-1" element={<SatwaSatu />} />
        <Route path="/detail-sebelas-2" element={<SatwaDua />} />
        <Route path="/detail-sebelas-3" element={<SatwaTiga />} />
        <Route path="/detail-sebelas-4" element={<SatwaEmpat />} />

        {/* NKRI 1 */}
        <Route path="/detail-12-1" element={<KulinerSatu />} />
        <Route path="/detail-12-2" element={<KulinerDua />} />
        <Route path="/detail-12-3" element={<KulinerTiga />} />
        <Route path="/detail-12-4" element={<KulinerEmpat />} />

        {/* NKRI 2 */}
        <Route path="/detail-13-1" element={<TradisiSatu />} />
        <Route path="/detail-13-2" element={<TradisiDua />} />
        <Route path="/detail-13-3" element={<TradisiTiga />} />
        <Route path="/detail-13-4" element={<TradisiEmpat />} />

        {/* backend */}
        <Route path="/backend/navbar" element={<NavbarForm />} />
        <Route path="/backend/beranda" element={<BerandaForm />} />
        <Route path="/backend/konten-satu" element={<KontenSatuForm />} />
        <Route path="/backend/konten-dua" element={<KontenDuaForm />} />
        <Route path="/backend/konten-tiga" element={<KontenTigaForm />} />
        <Route path="/backend/konten-empat" element={<KontenEmpatForm />} />
        <Route path="/backend/berita" element={<BeritaForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
