import { motion } from "motion/react";
import { Code, Globe, CalendarCheck, Mail } from "lucide-react";

const partners = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD0ltqSLMt_ufRC_aLHQwSSj8TvyoiRh_aP6B5yn3_G4Ap8D9mcpiI7PnU300srIq7BZNEw2Mbxp__avMf1GbOOvzzJqGpHUT9wS1FQ4zf2MEZtEOGE0SDS2gLQSW6IkWCZGjNw8py70z8wWQOyY2TQz7Zbu8l0QrU_pTWqI3Maf8rhjgpbc_xq9SmqAftxUpznGLmTlJ16bBuEkRJXRadAzlrTmxpyNZ_gp0lZgxOGYSs2-1JvGKI9su-VY3B2wvCA_cfkLprMVgyJ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAC16kZCWvPQwb5ugVGc9mUFpP7QIlyFdzNzDMzW0GYM073RvxCMIZFIsyHCkpwlhASxhV_rE-jpEzWgy6CJj4TcyOUoZ7RJzUXD8ZRNd4ra7YneujkOwDWgV9XwmLT1zwFUi3csBHaCb0QzrQ20WjVmm5YfpwwXWEWyPbWqeofVv_p4DVdA0aNwcy0g4Y4dTH35rIh7UQQ1tlsbRAh-hFORNrxDWSBbeY4YZUy0SfRTYwekbCz2hIYfsT0b6VZIQznMuLUWMGDuR8o",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDKLCx7nUwXWE_SMZ7A4JUWc9t3xMLAbnj73y4P87xreshuL9RI-XxidNZMqkjV193gNUF1qRswD2ddnKnj6q71opPhj0LRW7uRbuE9pym7LaG8biMCfHlRZNEf6nQF4Bny4g90VJj63oolKqZ4CayPATisD6OosYtuS1viDaOOsxRTPICky71kgRvDvztA4zT6ORPGLEP3IRjvCHivdIMSNc4oU5arEU7Pu93MWF_fmBagYa6RFu6esFzWGdq8JyX-j2QnYauoqFk5",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCxTw6Jqk98KljB4te8t5xEab29wYCadhL6EuLpDlhwLrvybusQCDOWXwrileQ4Tm77swlWOtFJWpl4nTz69aOYTvCYlI-lmLOxkg5Vj9R99JAr0ncetwsSYSqB6JKFXl-midDwT_d6V5pvuBNQJYWDuRQWMxHWZhVG6zOk2AOFhytypTJz89b8nc6xMP7antFJVPRpzCYWu4r1Ifzyz7a4W86fhO1tgxINWhestWw1uHFGx6uOVdSZIhe4Uj6eGRx4IhWeFCMNLL5t",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA4IyPfKrvJ33eT8jmi4AMqn40Sz1ei7Z1KFP8t2S6L73YWs34B-HKwODIKZebvd3xoD9a0o1X7pEQwUoiDsjFCh5TzyUIwWiaeea0kErBNBQhSLs6eMCTfZnuBItl0FkAGoOEL1HstkceFELg6d4ZuH6o8pOzLUMBJDyjw1veabhBEHBpfVvbEmBR_dimVKgBIdYTHeLEpA_jyJyFb1bqer5Mid3F30A4yWRFmD9tONXIsbfSYTFJL7vGYNkQl4SGd7-r59GFuF_A7"
];

const team = [
  {
    name: "Ashwin",
    role: "Community Lead & Blockchain Developer",
    description: "Veteran of the Ethereum ecosystem, dedicated to growing the local dev scene with 5+ years of experience.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeK-PSV66FMUqdJelXiEwS4KQJMbNzdnwGZpfLNsgfvXuObdiuVehsH1GwOv8sql-0zhyS8ZeDkw0z7HQdx3wrNslQJdrWEdmykX6ld3kaojBGV54lQKhqBf77NeDbRkizgqzdoyaKph6-HvBQkSqcgLzdE7EPMX_n3Jyoh4Z9L94sA_OQ6mq_8Tfs5MLw-X0y4bx2Hg68yk1W5VdCvdtigGw6q0Ea0jD4nqlgELFJMIEOn63p54O4fEY7dUYluNEuNpxhCxxObEvL",
    color: "primary",
    icons: [Code, Globe]
  },
  {
    name: "Sarah Chen",
    role: "Lead Architect",
    description: "Smart contract security specialist with a focus on DeFi protocols and L2 scaling solutions.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3gRl4wu_InEaZFxRO26zpn319p61M4g_x3sC1KuWY6dV1utn7kTcgXoXcTw67-eIMs1ScAYZ1bHMITocHCYQzycPDuGsgNT0a_b1xYwYaN849F_ULtWGiq__lQRvPxv6urYrYTDdgHy1ZrEJETEuX17mn0drbaPO0d15dIMsPW92hDD1q4pUvsc9w6pX8Dr-qncag1-zeDZPQvkWbFCGdqvsqdGeQkfI-sTkUCr2CeQvhVO6ICJe8vAZca-asFT3OWip8XRRlN9CB",
    color: "secondary",
    icons: [Code, Globe]
  },
  {
    name: "Marcus Tan",
    role: "Operations",
    description: "Ensuring smooth execution of events and community initiatives across the region.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBg6jHs-htp0IXlsm1cP_Ol2vQzlao0fcHeK2sit1wI7DMBzqzD1QH_UjeXWCLYhCQfadOEbrRsifsJGVjFZYXSnhHw8F1KmpiC_pkHm0cswKOdx1ItEznty0pqoikc0PegfVvRDLFuFi-8zu2ABs3-mjEu42wfYtt8aZenPgASWn-nxA6UXZhEqcN6tykRKYTjyl7iFC4AaTDyCpp0axpKR7AITfkfb5OCrb8eadPZufAe9uIFdbVkTYFcgHRsfuFo0UGRWBxRy4kN",
    color: "tertiary",
    icons: [CalendarCheck, Mail]
  }
];

export default function PartnersAndTeam() {
  return (
    <section className="bg-surface" id="team">
      {/* Partners */}
      <div className="py-16 px-6 border-y border-white/5">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold">Ecosystem Collaborators</h3>
        </div>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50">
          {partners.map((src, i) => (
            <img key={i} className="h-8 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" src={src} alt="Partner" referrerPolicy="no-referrer" />
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-12 w-1.5 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">The Stewards</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {team.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl overflow-hidden bg-surface-container-low border border-white/5 flex flex-col"
              >
                <div className="aspect-[4/3] md:aspect-[4/5] overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={member.image} alt={member.name} referrerPolicy="no-referrer" />
                </div>
                <div className="p-6 md:p-8">
                  <h4 className="text-xl md:text-2xl font-bold mb-1">{member.name}</h4>
                  <p className={`text-${member.color} font-bold text-xs uppercase tracking-widest mb-4`}>{member.role}</p>
                  <p className="text-on-surface-variant text-sm italic leading-relaxed">
                    "{member.description}"
                  </p>
                </div>
              </motion.div>
            ))}
            
            {/* Join Team Placeholder */}
            <div className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-surface-container-low border border-dashed border-white/10 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant mb-4 group-hover:bg-primary/20 group-hover:text-primary transition-all">
                <Code size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Join the Stewards</h4>
              <p className="text-on-surface-variant text-sm">We're always looking for passionate builders to help grow the community.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
