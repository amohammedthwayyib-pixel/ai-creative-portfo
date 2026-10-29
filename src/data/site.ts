export const site = {
  name: "Mohammed Thwayyib",
  role: "Digital marketing executive",
  email: "w.mohammedthwayyib@gmail.com",
  location: "Kerala, India",
  url: "https://your-portfolio.vercel.app", // update after deploying
  resume: "/resume.pdf",
  socials: [{ label: "LinkedIn", href: "https://linkedin.com/in/mohammedthwayyib" }], // add Instagram / YouTube here
};

export const skills = [
  { title: "Performance marketing & Meta Ads", items: ["Meta Ads campaigns for client accounts", "Audience targeting and segmentation", "Campaign optimisation", "Cost-per-result analysis"] },
  { title: "Google Ads, analytics & SEO", items: ["Google Ads: Search, Display and Video certified", "Google Analytics certified", "SEO fundamentals (Semrush)", "Performance analysis and reporting"] },
  { title: "Social media strategy & content", items: ["Strategy and branding", "Content calendar planning", "Audience and trend research", "Reels, Shorts and carousels"] },
  { title: "Video, motion & AI", items: ["Short-form video editing", "Motion graphics", "AI content creation and prompt engineering", "AI video with Higgsfield and Google Flow"] },
];
export const tools = ["Premiere Pro", "DaVinci Resolve", "CapCut", "Apple Motion", "Higgsfield", "Google Flow", "Meta Ads Manager", "Meta Business Suite", "Instagram Insights"];
export const certs = ["Google Ads Search Certification", "Google Ads Display Certification", "Google Ads Video Certification", "Google Analytics Certification", "AI-Powered Performance Ads Certification", "Semrush: Fundamentals of SEO"];
export const stats = [
  { v: "69,556", l: "users reached" }, { v: "76,528", l: "impressions" },
  { v: "588", l: "profile visits at ₹0.71 each" }, { v: "1,351", l: "post engagements at ₹0.31 each" },
];

export const workflow = [
  { t: "Research", d: "Audience, competitors and what already works in the feed." },
  { t: "Concept", d: "One clear idea and hook per piece, tied to a goal." },
  { t: "Produce", d: "Shoot, generate or source footage; edit for the platform." },
  { t: "Refine", d: "Test variations of hook, pacing and captions." },
  { t: "Review", d: "Check against the objective and note what to change next." },
];

export type Category = "strategy" | "campaign" | "video" | "ai";
export const categories: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All" }, { id: "strategy", label: "Strategy" }, { id: "campaign", label: "Campaigns" },
  { id: "video", label: "Video edits" }, { id: "ai", label: "AI video" },
];
export type Project = {
  id: string; title: string; category: Category; hue: number; desc: string; objective: string;
  role: string; tools: string[]; process: string[]; beforeAfter?: boolean; demo?: boolean; youtube?: string; duration?: string; date?: string; results?: string[];
  video?: string; image?: string; // youtube: an 11-character YouTube video ID
  // add real files in /public and set these paths
};
// Entries without demo:false are labelled DEMO placeholders. Replace them with your own work.
export const projects: Project[] = [
  { id: "p0", title: "Vismaya Amusement Park Meta Ads", category: "campaign", hue: 200, demo: false, desc: "Meta Ads for a client account during my QuadCubes internship.", objective: "Drive Instagram profile visits and post engagement.", role: "Digital Marketing Intern: ran the Meta Ads campaign", tools: ["Meta Ads Manager", "Meta Business Suite", "Instagram Insights"], process: ["Audience targeting and geographic/demographic segmentation", "Run campaign", "Analyse reach, impressions, placements, cost per result", "Optimise audience and placements"], results: ["Reached 69,556 users with 76,528 impressions", "588 Instagram profile visits at ₹0.71 per result", "1,351 post engagements at ₹0.31 per engagement"] },
  { id: "p1", title: "30-day content calendar", category: "strategy", hue: 255, desc: "A sample calendar for a fictional coffee brand.", objective: "Show how themes, formats and posting rhythm fit together.", role: "Strategy and planning (personal project)", tools: ["Meta Business Suite", "Instagram Insights"], process: ["Define pillars", "Map formats to goals", "Draft hooks", "Schedule"] },
  { id: "p2", title: "Launch campaign concept", category: "campaign", hue: 330, desc: "Concept board and ad variations for a fictional product.", objective: "Present one idea across feed, story and reel placements.", role: "Concept, copy and creative direction", tools: ["Meta Ads Manager"], process: ["Audience persona", "Big idea", "Ad variations", "Test plan"] },
  { id: "p3", title: "Product reel edit", category: "video", hue: 25, desc: "A 15-second vertical reel cut to beat.", objective: "Hold attention in the first three seconds.", role: "Editing, sound and captions", tools: ["Premiere Pro", "CapCut"], process: ["Select takes", "Rough cut", "Captions + sound", "Colour"], beforeAfter: true },
  { id: "p4", title: "Static + video ad set", category: "campaign", hue: 175, desc: "Matching ad creatives in three aspect ratios.", objective: "Keep one message consistent across placements.", role: "Design and editing", tools: ["Premiere Pro", "Apple Motion"], process: ["Layout system", "Resize", "Motion pass", "Export"] },
  { id: "p5", title: "AI cinematic sequence", category: "ai", hue: 280, desc: "A short AI-generated sequence built from a written storyboard.", objective: "Explore consistent look and mood across shots.", role: "Prompting, direction and edit", tools: ["Higgsfield", "Google Flow", "DaVinci Resolve"], process: ["Storyboard", "Generate shots", "Select + upscale", "Edit and grade"] },
  { id: "p6", title: "AI concept ad experiment", category: "ai", hue: 205, desc: "An experimental ad concept made with AI-assisted visuals.", objective: "Test how far AI footage can carry a brand story.", role: "Concept, generation and edit", tools: ["Higgsfield", "CapCut"], process: ["Script", "Shot list", "Generate", "Edit + sound"] },
];

export const interests = ["Meta Ads", "Performance marketing", "Campaign optimisation", "Google Ads and Analytics", "SEO", "Short-form video", "AI video generation", "Visual storytelling"];
export const experience = [{
  period: "Mar 2026 – Oct 2026", role: "Digital Marketing Intern", org: "QuadCubes", place: "Kerala, India",
  desc: "Ran Meta Ads campaigns for client accounts, focused on Instagram profile visits and post engagement.",
  stack: ["Meta Ads Manager", "Meta Business Suite", "Instagram Insights"],
  duties: ["Audience targeting and segmentation", "Using performance data to guide optimisation", "Geographic and demographic targeting", "Reach, impressions and placement analysis", "Cost-per-result evaluation", "Audience and placement optimisation"],
}];
export const education = [
  { title: "Alagappa University", sub: "Bachelor of Commerce in Computer Applications (B.Com CA)", period: "Expected May 2027" },
  { title: "CDA Academy", sub: "Digital Marketing Training", period: "Certifications listed below" },
];
export const languages = ["English (fluent)", "Malayalam (native)", "Arabic (conversational)"];

// What you can do for an employer or client. Edit freely.
export const services = [
  { icon: "🎯", title: "Meta Ads campaigns", d: "Audience targeting, segmentation and placement choices set up in Meta Ads Manager." },
  { icon: "📊", title: "Analytics and reporting", d: "Reach, impressions and cost-per-result reviewed to decide what to change next." },
  { icon: "📅", title: "Content strategy", d: "Content calendars and platform-first ideas for reels, shorts and carousels." },
  { icon: "🎬", title: "Short-form video editing", d: "Reels and ad cuts in Premiere Pro, DaVinci Resolve and CapCut." },
  { icon: "✨", title: "Motion graphics", d: "Titles and animated elements built in Apple Motion." },
  { icon: "🤖", title: "AI video creation", d: "AI-assisted visuals and prompts with Higgsfield and Google Flow." },
];
