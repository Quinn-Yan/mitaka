import {
  AbuseIPDB,
  AnyRun,
  Apility,
  Apklab,
  ArchiveOrg,
  ArchiveToday,
  BGPView,
  BinaryEdge,
  BitcoinAbuse,
  BitcoinWhosWho,
  BlockChain,
  BlockCypher,
  Censys,
  Crtsh,
  DNSlytics,
  DomainBigData,
  DomainTools,
  DomainWatch,
  EmailRep,
  FindSubDomains,
  FOFA,
  FortiGuard,
  GoogleSafeBrowsing,
  GreyNoise,
  Hashdd,
  HurricaneElectric,
  HybridAnalysis,
  IntelligenceX,
  IPinfo,
  IPIP,
  JoeSandbox,
  Malshare,
  Maltiverse,
  Malwares,
  NVD,
  OCCRP,
  ONYPHE,
  OpenTIP,
  OTX,
  PubDB,
  PublicWWW,
  Pulsedive,
  RiskIQ,
  Scumware,
  SecurityTrails,
  Shodan,
  Sploitus,
  SpyOnWeb,
  Spyse,
  Talos,
  ThreatConnect,
  ThreatCrowd,
  ThreatMiner,
  TIP,
  URLhaus,
  Urlscan,
  ViewDNS,
  VirusTotal,
  VMRay,
  Vulmon,
  VulncodeDB,
  VxCube,
  WebAnalyzer,
  XForceExchange,
  ZoomEye,
} from ".";

import { Searcher } from "../types";

export const Searchers: Searcher[] = [
  new AbuseIPDB(),
  new AnyRun(),
  new Apility(),
  new Apklab(),
  new ArchiveOrg(),
  new ArchiveToday(),
  new BGPView(),
  new BinaryEdge(),
  new BitcoinAbuse(),
  new BitcoinWhosWho(),
  new BlockChain(),
  new BlockCypher(),
  new Censys(),
  new Crtsh(),
  new DNSlytics(),
  new DomainBigData(),
  new DomainTools(),
  new DomainWatch(),
  new EmailRep(),
  new FindSubDomains(),
  new FOFA(),
  new FortiGuard(),
  new GoogleSafeBrowsing(),
  new GreyNoise(),
  new Hashdd(),
  new HurricaneElectric(),
  new HybridAnalysis(),
  new IntelligenceX(),
  new IPinfo(),
  new IPIP(),
  new JoeSandbox(),
  new Malshare(),
  new Maltiverse(),
  new Malwares(),
  new NVD(),
  new OCCRP(),
  new ONYPHE(),
  new OpenTIP(),
  new OTX(),
  new PubDB(),
  new PublicWWW(),
  new Pulsedive(),
  new RiskIQ(),
  new Scumware(),
  new SecurityTrails(),
  new Shodan(),
  new Sploitus(),
  new SpyOnWeb(),
  new Spyse(),
  new Talos(),
  new ThreatConnect(),
  new ThreatCrowd(),
  new ThreatMiner(),
  new TIP(),
  new URLhaus(),
  new Urlscan(),
  new ViewDNS(),
  new VirusTotal(),
  new VMRay(),
  new Vulmon(),
  new VulncodeDB(),
  new VxCube(),
  new WebAnalyzer(),
  new XForceExchange(),
  new ZoomEye(),
];
