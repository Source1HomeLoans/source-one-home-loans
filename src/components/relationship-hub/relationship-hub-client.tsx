"use client";

import { useMemo, useState } from "react";
import {
  Bell,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileUp,
  Mail,
  MessageSquareText,
  NotebookPen,
  Phone,
  Plus,
  Search,
  Settings,
  Upload,
  UserRound,
} from "lucide-react";
import {
  contactCategories,
  contactFiles,
  relationshipContacts,
  relationshipTasks,
  scoringInputs,
  suggestedTags,
  timelineEvents,
  type ContactCategory,
  type RelationshipContact,
} from "@/lib/relationship-hub-data";

type HubSection = "Home" | "Contacts" | "Tasks" | "Files" | "Settings";

const navItems: HubSection[] = ["Home", "Contacts", "Tasks", "Files", "Settings"];

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));

const formatDateTime = (value: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));

const initials = (contact: RelationshipContact) => `${contact.firstName[0] ?? ""}${contact.lastName[0] ?? ""}`.toUpperCase();

const fullName = (contact: RelationshipContact) => `${contact.firstName} ${contact.lastName}`;

const telHref = (phone: string) => `tel:${phone.replace(/\D/g, "")}`;

const smsHref = (phone: string) => `sms:${phone.replace(/\D/g, "")}`;

const searchableText = (contact: RelationshipContact) =>
  [
    contact.firstName,
    contact.lastName,
    contact.company,
    contact.jobTitle,
    contact.email,
    contact.phone,
    contact.address,
    contact.city,
    contact.state,
    contact.category,
    contact.assignedUser,
    contact.relationshipTier,
    contact.preferredContactMethod,
    contact.referredBy,
    contact.tags.join(" "),
    contact.notes.join(" "),
    timelineEvents.filter((event) => event.contactId === contact.id).map((event) => `${event.eventType} ${event.title} ${event.description}`).join(" "),
    relationshipTasks.filter((task) => task.contactId === contact.id).map((task) => `${task.title} ${task.notes} ${task.status}`).join(" "),
    contactFiles.filter((file) => file.contactId === contact.id).map((file) => `${file.fileName} ${file.fileType}`).join(" "),
  ]
    .join(" ")
    .toLowerCase();

const emptyQuickAdd = {
  firstName: "",
  lastName: "",
  phoneOrEmail: "",
  category: "Prospect" as ContactCategory,
  company: "",
  tags: "",
};

export function RelationshipHubClient() {
  const [activeSection, setActiveSection] = useState<HubSection>("Home");
  const [contacts, setContacts] = useState<RelationshipContact[]>(relationshipContacts);
  const [selectedContactId, setSelectedContactId] = useState(relationshipContacts[0]?.id ?? "");
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<ContactCategory | "All">("All");
  const [tagFilter, setTagFilter] = useState("All");
  const [quickAdd, setQuickAdd] = useState(emptyQuickAdd);
  const [quickNote, setQuickNote] = useState("");
  const [quickTask, setQuickTask] = useState("");
  const [mobileDetailOpen, setMobileDetailOpen] = useState(false);

  const filteredContacts = useMemo(() => {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    return contacts.filter((contact) => {
      const matchesSearch = terms.every((term) => searchableText(contact).includes(term));
      const matchesCategory = categoryFilter === "All" || contact.category === categoryFilter;
      const matchesTag = tagFilter === "All" || contact.tags.includes(tagFilter);
      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [categoryFilter, contacts, query, tagFilter]);

  const selectedContact = contacts.find((contact) => contact.id === selectedContactId) ?? filteredContacts[0] ?? contacts[0];
  const selectedTimeline = timelineEvents.filter((event) => event.contactId === selectedContact?.id);
  const selectedTasks = relationshipTasks.filter((task) => task.contactId === selectedContact?.id);
  const selectedFiles = contactFiles.filter((file) => file.contactId === selectedContact?.id);
  const dueFollowUps = contacts.filter((contact) => contact.followUpStatus !== "Current");
  const birthdays = contacts.filter((contact) => {
    const birthday = new Date(contact.birthday);
    return birthday.getMonth() === 7;
  });

  function addContact() {
    if (!quickAdd.firstName.trim() || !quickAdd.lastName.trim() || !quickAdd.phoneOrEmail.trim()) {
      return;
    }

    const isEmail = quickAdd.phoneOrEmail.includes("@");
    const newContact: RelationshipContact = {
      id: `local-${Date.now()}`,
      firstName: quickAdd.firstName.trim(),
      lastName: quickAdd.lastName.trim(),
      company: quickAdd.company.trim() || "No company yet",
      jobTitle: "",
      email: isEmail ? quickAdd.phoneOrEmail.trim() : "",
      phone: isEmail ? "" : quickAdd.phoneOrEmail.trim(),
      address: "",
      city: "",
      state: "TX",
      zip: "",
      birthday: "2026-01-01",
      category: quickAdd.category,
      tags: quickAdd.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
      relationshipScore: 24,
      relationshipTier: "Needs Attention",
      assignedUser: "David Bates",
      lastContactedAt: new Date().toISOString(),
      nextFollowUpAt: new Date().toISOString(),
      followUpFrequency: "Not set",
      followUpStatus: "Due Today",
      preferredContactMethod: isEmail ? "Email" : "Call",
      referredBy: "Quick Add",
      referralCount: 0,
      completedTasks: 0,
      meetingsCompleted: 0,
      closedLoans: 0,
      notes: ["Quick-added contact. Add details when ready."],
    };

    setContacts((current) => [newContact, ...current]);
    setSelectedContactId(newContact.id);
    setActiveSection("Contacts");
    setMobileDetailOpen(true);
    setQuickAdd(emptyQuickAdd);
  }

  if (!selectedContact) {
    return null;
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F4EC] text-[#081526]">
      <div className="border-b border-white/10 bg-[#081526] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E5C97A]">Source One Home Loans</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Source One Relationship Hub</h1>
            </div>
            <div className="relative w-full lg:max-w-xl">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#C8A44D]" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search Dallas Realtors, VA, DSCR, Birthday July, Hot Lead..."
                className="w-full rounded-2xl border border-white/10 bg-white/10 py-3 pl-11 pr-4 text-sm text-white outline-none ring-[#C8A44D] placeholder:text-white/45 focus:ring-2"
              />
            </div>
          </div>
          <nav className="flex gap-2 overflow-x-auto pb-1" aria-label="Relationship Hub navigation">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setActiveSection(item)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeSection === item ? "bg-[#C8A44D] text-[#081526]" : "bg-white/8 text-white/75 hover:bg-white/15"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {activeSection === "Home" && (
          <section className="grid gap-5 lg:grid-cols-[1fr_380px]">
            <div className="grid gap-5 md:grid-cols-2">
              <DashboardCard title="New Contacts" icon={UserRound} value={contacts.length.toString()} detail="Unified people and organizations" />
              <DashboardCard title="Follow-ups Due" icon={Bell} value={dueFollowUps.length.toString()} detail="Due today or overdue" urgent={dueFollowUps.length > 0} />
              <DashboardCard title="Today's Tasks" icon={CheckCircle2} value={relationshipTasks.filter((task) => task.status === "Today").length.toString()} detail="Simple action list" />
              <DashboardCard title="Upcoming Birthdays" icon={CalendarDays} value={birthdays.length.toString()} detail="This month" />
              <div className="rounded-3xl border border-[#0B1F3A]/10 bg-white p-5 shadow-sm md:col-span-2">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-semibold">Contacts Needing Attention</h2>
                    <p className="mt-1 text-sm text-slate-500">Overdue follow-ups, low scores, and unassigned relationships rise to the top.</p>
                  </div>
                  <button type="button" onClick={() => setActiveSection("Contacts")} className="rounded-full bg-[#0B1F3A] px-4 py-2 text-sm font-semibold text-white">
                    Review
                  </button>
                </div>
                <div className="mt-5 grid gap-3">
                  {dueFollowUps.map((contact) => (
                    <ContactMiniRow key={contact.id} contact={contact} onClick={() => { setSelectedContactId(contact.id); setActiveSection("Contacts"); }} />
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-[#0B1F3A]/10 bg-white p-5 shadow-sm md:col-span-2">
                <h2 className="text-lg font-semibold">Recently Viewed</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {contacts.slice(0, 4).map((contact) => (
                    <button
                      key={contact.id}
                      type="button"
                      onClick={() => {
                        setSelectedContactId(contact.id);
                        setActiveSection("Contacts");
                      }}
                      className="rounded-2xl border border-slate-200 bg-[#F7F4EC] px-4 py-3 text-left text-sm font-semibold text-[#0B1F3A]"
                    >
                      {fullName(contact)}
                      <span className="block text-xs font-normal text-slate-500">{contact.company}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <QuickAddCard quickAdd={quickAdd} setQuickAdd={setQuickAdd} addContact={addContact} />
          </section>
        )}

        {activeSection === "Contacts" && (
          <section className="grid gap-5 lg:grid-cols-[410px_minmax(0,1fr)]">
            <div className={`${mobileDetailOpen ? "hidden lg:block" : "block"} rounded-3xl border border-[#0B1F3A]/10 bg-white p-4 shadow-sm`}>
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold">Contacts</h2>
                <span className="rounded-full bg-[#F7F4EC] px-3 py-1 text-xs font-semibold text-[#0B1F3A]">{filteredContacts.length} found</span>
              </div>
              <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                {(["All", ...contactCategories] as const).map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setCategoryFilter(category)}
                    className={`whitespace-nowrap rounded-full px-3 py-2 text-xs font-bold ${
                      categoryFilter === category ? "bg-[#0B1F3A] text-white" : "bg-[#F7F4EC] text-slate-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="mt-2 flex gap-2 overflow-x-auto pb-3">
                {["All", "Top Partner", "Hot Lead", "Needs Follow-up", "VA", "DSCR", "Jumbo", "Dallas", "Spanish"].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setTagFilter(tag)}
                    className={`whitespace-nowrap rounded-full px-3 py-2 text-xs font-bold ${
                      tagFilter === tag ? "bg-[#C8A44D] text-[#081526]" : "bg-white text-slate-600 ring-1 ring-slate-200"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <div className="max-h-[720px] space-y-3 overflow-y-auto pr-1">
                {filteredContacts.map((contact) => (
                  <button
                    key={contact.id}
                    type="button"
                    onClick={() => {
                      setSelectedContactId(contact.id);
                      setMobileDetailOpen(true);
                    }}
                    className={`w-full rounded-2xl border p-4 text-left transition ${
                      selectedContact.id === contact.id ? "border-[#C8A44D] bg-[#FFF9E8]" : "border-slate-200 bg-white hover:border-[#C8A44D]/70"
                    }`}
                  >
                    <div className="flex gap-3">
                      <Avatar contact={contact} />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-semibold text-[#0B1F3A]">{fullName(contact)}</p>
                            <p className="text-xs text-slate-500">{contact.category} | {contact.company}</p>
                          </div>
                          <span className="rounded-full bg-[#0B1F3A] px-2 py-1 text-xs font-bold text-white">{contact.relationshipScore}</span>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {contact.tags.slice(0, 3).map((tag) => <TagPill key={tag} tag={tag} />)}
                        </div>
                        <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-slate-500">
                          <span>Last: {formatDate(contact.lastContactedAt)}</span>
                          <span>Assigned: {contact.assignedUser}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <ContactDetail
              contact={selectedContact}
              timeline={selectedTimeline}
              tasks={selectedTasks}
              files={selectedFiles}
              quickNote={quickNote}
              setQuickNote={setQuickNote}
              quickTask={quickTask}
              setQuickTask={setQuickTask}
              closeMobile={() => setMobileDetailOpen(false)}
              mobileDetailOpen={mobileDetailOpen}
            />
          </section>
        )}

        {activeSection === "Tasks" && (
          <section className="grid gap-5 lg:grid-cols-4">
            {(["Today", "Upcoming", "Overdue", "Completed"] as const).map((status) => (
              <div key={status} className="rounded-3xl border border-[#0B1F3A]/10 bg-white p-5 shadow-sm">
                <h2 className="font-semibold">{status}</h2>
                <div className="mt-4 space-y-3">
                  {relationshipTasks.filter((task) => task.status === status).map((task) => {
                    const contact = contacts.find((item) => item.id === task.contactId);
                    return (
                      <div key={task.id} className="rounded-2xl bg-[#F7F4EC] p-4">
                        <p className="text-sm font-semibold">{task.title}</p>
                        <p className="mt-1 text-xs text-slate-500">{contact ? fullName(contact) : "No contact"} | {formatDateTime(task.dueAt)}</p>
                        <p className="mt-2 text-xs leading-5 text-slate-600">{task.notes}</p>
                      </div>
                    );
                  })}
                  {!relationshipTasks.some((task) => task.status === status) && <p className="rounded-2xl bg-[#F7F4EC] p-4 text-sm text-slate-500">Nothing here. Nice and quiet.</p>}
                </div>
              </div>
            ))}
          </section>
        )}

        {activeSection === "Files" && (
          <section className="rounded-3xl border border-[#0B1F3A]/10 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold">Contact Files</h2>
                <p className="mt-1 text-sm text-slate-500">Designed for Supabase Storage attachments by contact.</p>
              </div>
              <button type="button" className="inline-flex items-center gap-2 rounded-full bg-[#0B1F3A] px-4 py-2 text-sm font-semibold text-white">
                <Upload className="h-4 w-4" /> Upload File
              </button>
            </div>
            <div className="mt-5 grid gap-3">
              {contactFiles.map((file) => {
                const contact = contacts.find((item) => item.id === file.contactId);
                return (
                  <div key={file.id} className="grid gap-3 rounded-2xl border border-slate-200 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
                    <div>
                      <p className="font-semibold">{file.fileName}</p>
                      <p className="text-sm text-slate-500">{file.fileType} | {contact ? fullName(contact) : "No contact"} | Uploaded by {file.uploadedBy} on {formatDate(file.createdAt)}</p>
                    </div>
                    <div className="flex gap-2">
                      <button type="button" className="rounded-full bg-[#F7F4EC] px-3 py-2 text-xs font-bold text-[#0B1F3A]">View</button>
                      <button type="button" className="rounded-full bg-red-50 px-3 py-2 text-xs font-bold text-red-700">Delete</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {activeSection === "Settings" && (
          <section className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#0B1F3A]/10 bg-white p-5 shadow-sm">
              <h2 className="flex items-center gap-2 text-xl font-semibold"><Settings className="h-5 w-5 text-[#C8A44D]" /> Relationship Scoring</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">Transparent scoring inputs stay editable here instead of buried in automation.</p>
              <div className="mt-5 space-y-2">
                {scoringInputs.map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between rounded-2xl bg-[#F7F4EC] px-4 py-3 text-sm">
                    <span>{label}</span>
                    <strong className="text-[#0B1F3A]">{value}</strong>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-[#0B1F3A]/10 bg-white p-5 shadow-sm">
              <h2 className="text-xl font-semibold">Tags & Legacy Tools</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">Primary navigation stays simple. Older modules belong here until retired.</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {suggestedTags.map((tag) => <TagPill key={tag.name} tag={tag.name} />)}
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-[#C8A44D] bg-[#FFF9E8] p-4">
                <p className="text-sm font-semibold text-[#0B1F3A]">Legacy Tools</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Kanban boards, Shark Tank, separate borrower screens, partner modules, and old pipeline workflows are de-emphasized here until data migration is verified.</p>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function DashboardCard({ title, value, detail, urgent, icon: Icon }: { title: string; value: string; detail: string; urgent?: boolean; icon: typeof UserRound }) {
  return (
    <div className="rounded-3xl border border-[#0B1F3A]/10 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <Icon className="h-5 w-5 text-[#C8A44D]" />
        {urgent && <span className="rounded-full bg-red-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-red-700">Action</span>}
      </div>
      <p className="mt-6 text-3xl font-semibold text-[#0B1F3A]">{value}</p>
      <h2 className="mt-1 font-semibold">{title}</h2>
      <p className="mt-1 text-sm text-slate-500">{detail}</p>
    </div>
  );
}

function QuickAddCard({
  quickAdd,
  setQuickAdd,
  addContact,
}: {
  quickAdd: typeof emptyQuickAdd;
  setQuickAdd: (value: typeof emptyQuickAdd) => void;
  addContact: () => void;
}) {
  return (
    <div className="rounded-3xl border border-[#C8A44D]/40 bg-[#0B1F3A] p-5 text-white shadow-sm">
      <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#E5C97A]"><Plus className="h-4 w-4" /> Quick Add Contact</p>
      <p className="mt-3 text-sm leading-6 text-white/65">Four required fields. Add the rest later.</p>
      <div className="mt-5 grid gap-3">
        <input value={quickAdd.firstName} onChange={(event) => setQuickAdd({ ...quickAdd, firstName: event.target.value })} placeholder="First name" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none ring-[#C8A44D] placeholder:text-white/45 focus:ring-2" />
        <input value={quickAdd.lastName} onChange={(event) => setQuickAdd({ ...quickAdd, lastName: event.target.value })} placeholder="Last name" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none ring-[#C8A44D] placeholder:text-white/45 focus:ring-2" />
        <input value={quickAdd.phoneOrEmail} onChange={(event) => setQuickAdd({ ...quickAdd, phoneOrEmail: event.target.value })} placeholder="Phone or email" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none ring-[#C8A44D] placeholder:text-white/45 focus:ring-2" />
        <select value={quickAdd.category} onChange={(event) => setQuickAdd({ ...quickAdd, category: event.target.value as ContactCategory })} className="rounded-2xl border border-white/10 bg-[#081526] px-4 py-3 text-sm outline-none ring-[#C8A44D] focus:ring-2">
          {contactCategories.map((category) => <option key={category}>{category}</option>)}
        </select>
        <input value={quickAdd.company} onChange={(event) => setQuickAdd({ ...quickAdd, company: event.target.value })} placeholder="Company (optional)" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none ring-[#C8A44D] placeholder:text-white/45 focus:ring-2" />
        <input value={quickAdd.tags} onChange={(event) => setQuickAdd({ ...quickAdd, tags: event.target.value })} placeholder="Tags, comma separated (optional)" className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none ring-[#C8A44D] placeholder:text-white/45 focus:ring-2" />
        <button type="button" onClick={addContact} className="rounded-full bg-[#C8A44D] px-5 py-3 text-sm font-bold text-[#081526]">
          Save Contact
        </button>
      </div>
    </div>
  );
}

function ContactDetail({
  contact,
  timeline,
  tasks,
  files,
  quickNote,
  setQuickNote,
  quickTask,
  setQuickTask,
  closeMobile,
  mobileDetailOpen,
}: {
  contact: RelationshipContact;
  timeline: typeof timelineEvents;
  tasks: typeof relationshipTasks;
  files: typeof contactFiles;
  quickNote: string;
  setQuickNote: (value: string) => void;
  quickTask: string;
  setQuickTask: (value: string) => void;
  closeMobile: () => void;
  mobileDetailOpen: boolean;
}) {
  return (
    <div className={`${mobileDetailOpen ? "block" : "hidden lg:block"} min-w-0 rounded-3xl border border-[#0B1F3A]/10 bg-white p-5 shadow-sm`}>
      <button type="button" onClick={closeMobile} className="mb-4 rounded-full bg-[#F7F4EC] px-3 py-2 text-xs font-bold text-[#0B1F3A] lg:hidden">
        Back to contacts
      </button>
      <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
        <div className="flex gap-4">
          <Avatar contact={contact} large />
          <div>
            <p className="text-2xl font-semibold text-[#0B1F3A]">{fullName(contact)}</p>
            <p className="mt-1 text-sm text-slate-500">{contact.company} | {contact.category}</p>
            <div className="mt-3 flex flex-wrap gap-2">{contact.tags.map((tag) => <TagPill key={tag} tag={tag} />)}</div>
          </div>
        </div>
        <div className="rounded-2xl bg-[#F7F4EC] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C8A44D]">Relationship Score</p>
          <p className="mt-2 text-4xl font-semibold text-[#0B1F3A]">{contact.relationshipScore}</p>
          <p className="text-sm text-slate-600">{contact.relationshipTier}</p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
        <QuickAction href={telHref(contact.phone)} icon={Phone} label="Call" />
        <QuickAction href={smsHref(contact.phone)} icon={MessageSquareText} label="Text" />
        <QuickAction href={`mailto:${contact.email}`} icon={Mail} label="Email" />
        <QuickButton icon={NotebookPen} label="Add Note" />
        <QuickButton icon={CheckCircle2} label="Create Task" />
        <QuickButton icon={FileUp} label="Upload File" />
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-5">
          <Panel title="Contact Information">
            <InfoRow label="Phone" value={contact.phone || "Not added"} />
            <InfoRow label="Email" value={contact.email || "Not added"} />
            <InfoRow label="Job title" value={contact.jobTitle || "Not added"} />
            <InfoRow label="Address" value={[contact.address, contact.city, contact.state, contact.zip].filter(Boolean).join(", ") || "Not added"} />
            <InfoRow label="Birthday" value={formatDate(contact.birthday)} />
            <InfoRow label="Preferred method" value={contact.preferredContactMethod} />
            <InfoRow label="Referred by" value={contact.referredBy} />
            <InfoRow label="Assigned user" value={contact.assignedUser} />
          </Panel>

          <Panel title="Follow-Up">
            <InfoRow label="Last contacted" value={formatDateTime(contact.lastContactedAt)} />
            <InfoRow label="Next follow-up" value={formatDateTime(contact.nextFollowUpAt)} />
            <InfoRow label="Frequency" value={contact.followUpFrequency} />
            <InfoRow label="Status" value={contact.followUpStatus} />
          </Panel>

          {contact.mortgageDetails && (
            <Panel title="Mortgage Details">
              <InfoRow label="Loan purpose" value={contact.mortgageDetails.loanPurpose} />
              <InfoRow label="Loan program" value={contact.mortgageDetails.loanProgram} />
              <InfoRow label="Est. loan amount" value={contact.mortgageDetails.estimatedLoanAmount} />
              <InfoRow label="ARIVE status" value={contact.mortgageDetails.ariveStatus} />
              <InfoRow label="ARIVE loan ID" value={contact.mortgageDetails.ariveLoanId || "Not synced"} />
              <button type="button" className="mt-3 rounded-full bg-[#0B1F3A] px-4 py-2 text-xs font-bold text-white">Send to ARIVE</button>
            </Panel>
          )}
        </div>

        <div className="space-y-5">
          <Panel title="Timeline">
            <div className="mb-4 grid gap-2 sm:grid-cols-[1fr_auto]">
              <input value={quickNote} onChange={(event) => setQuickNote(event.target.value)} placeholder="Add a note in one click..." className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none ring-[#C8A44D] focus:ring-2" />
              <button type="button" className="rounded-full bg-[#C8A44D] px-4 py-2 text-sm font-bold text-[#081526]">Add Note</button>
            </div>
            <div className="space-y-4">
              {timeline.map((event) => (
                <div key={event.id} className="flex gap-3">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0B1F3A] text-[#C8A44D]"><Clock3 className="h-4 w-4" /></div>
                  <div>
                    <p className="text-sm font-semibold">{event.eventType}: {event.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{event.description}</p>
                    <p className="mt-1 text-xs text-slate-400">{event.createdBy} | {formatDateTime(event.createdAt)}</p>
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Tasks">
            <div className="mb-4 grid gap-2 sm:grid-cols-[1fr_auto]">
              <input value={quickTask} onChange={(event) => setQuickTask(event.target.value)} placeholder="Create task..." className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none ring-[#C8A44D] focus:ring-2" />
              <button type="button" className="rounded-full bg-[#0B1F3A] px-4 py-2 text-sm font-bold text-white">Create</button>
            </div>
            <div className="grid gap-3">
              {tasks.map((task) => (
                <div key={task.id} className="rounded-2xl bg-[#F7F4EC] p-4">
                  <p className="text-sm font-semibold">{task.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{task.status} | {task.priority} | {formatDateTime(task.dueAt)}</p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Files">
            <div className="grid gap-3">
              {files.map((file) => (
                <div key={file.id} className="rounded-2xl bg-[#F7F4EC] p-4">
                  <p className="text-sm font-semibold">{file.fileName}</p>
                  <p className="mt-1 text-xs text-slate-500">{file.fileType} | {formatDate(file.createdAt)}</p>
                </div>
              ))}
              {files.length === 0 && <p className="text-sm text-slate-500">No files yet. Use Upload File when ready.</p>}
            </div>
          </Panel>

          <Panel title="Relationship Details">
            <div className="grid gap-3 sm:grid-cols-3">
              <Metric label="Referrals" value={contact.referralCount} />
              <Metric label="Completed tasks" value={contact.completedTasks} />
              <Metric label="Meetings" value={contact.meetingsCompleted} />
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}

function ContactMiniRow({ contact, onClick }: { contact: RelationshipContact; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="flex items-center gap-3 rounded-2xl bg-[#F7F4EC] p-3 text-left">
      <Avatar contact={contact} />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold">{fullName(contact)}</p>
        <p className="truncate text-xs text-slate-500">{contact.followUpStatus} | {contact.category}</p>
      </div>
      <span className="text-xs font-bold text-[#C8A44D]">{contact.relationshipScore}</span>
    </button>
  );
}

function Avatar({ contact, large }: { contact: RelationshipContact; large?: boolean }) {
  return (
    <div className={`${large ? "h-16 w-16 text-lg" : "h-11 w-11 text-sm"} flex shrink-0 items-center justify-center rounded-2xl bg-[#0B1F3A] font-bold text-[#E5C97A]`}>
      {initials(contact)}
    </div>
  );
}

function TagPill({ tag }: { tag: string }) {
  const color = suggestedTags.find((item) => item.name === tag)?.color ?? "#C8A44D";
  return (
    <span className="rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white" style={{ backgroundColor: color }}>
      {tag}
    </span>
  );
}

function QuickAction({ href, icon: Icon, label }: { href: string; icon: typeof Phone; label: string }) {
  return (
    <a href={href} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0B1F3A] px-3 py-3 text-sm font-bold text-white">
      <Icon className="h-4 w-4 text-[#C8A44D]" /> {label}
    </a>
  );
}

function QuickButton({ icon: Icon, label }: { icon: typeof NotebookPen; label: string }) {
  return (
    <button type="button" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#F7F4EC] px-3 py-3 text-sm font-bold text-[#0B1F3A]">
      <Icon className="h-4 w-4 text-[#C8A44D]" /> {label}
    </button>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-[#0B1F3A]">{title}</h3>
      {children}
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-slate-100 py-2 text-sm last:border-b-0">
      <span className="text-slate-500">{label}</span>
      <span className="text-right font-semibold text-[#0B1F3A]">{value}</span>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl bg-[#F7F4EC] p-4">
      <p className="text-2xl font-semibold text-[#0B1F3A]">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  );
}
