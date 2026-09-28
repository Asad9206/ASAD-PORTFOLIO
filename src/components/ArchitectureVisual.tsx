import React, { useState, useEffect } from 'react';
import { Database, Server, Cpu, Globe, ArrowDown, CheckCircle2, Shield, Layers, Code2 } from 'lucide-react';

interface ArchitectureVisualProps {
  scrollProgress?: number; // 0 to 1
}

interface NodeData {
  id: string;
  title: string;
  category: string;
  description: string;
  tag: string;
  icon: React.ReactNode;
}

export const ArchitectureVisual: React.FC<ArchitectureVisualProps> = () => {
  const [scrollStage, setScrollStage] = useState<number>(0);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  // Monitor window scroll to smoothly transition between Scene 1 and Scene 2
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // As user scrolls past the top of hero, transition to Scene 2 and KEEP FINAL STATE!
      if (scrollY > 180) {
        setScrollStage(1); // Final state: Java, Spring Boot, REST APIs, PostgreSQL, MySQL
      } else {
        setScrollStage(0); // Scene 1: Frontend -> REST API -> Spring Boot -> Business Logic -> Database
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scene 1: Conceptual Workflow
  const scene1Nodes: NodeData[] = [
    {
      id: 'frontend',
      title: 'Frontend Client',
      category: 'Client Layer',
      description: 'React / Web client generating authenticated user interactions.',
      tag: 'UI / UX',
      icon: <Globe className="w-4 h-4 text-purple-600" />
    },
    {
      id: 'rest-api',
      title: 'REST API',
      category: 'Gateway & Routing',
      description: 'RESTful contracts with custom header inspection and validation.',
      tag: 'HTTP / JSON',
      icon: <Layers className="w-4 h-4 text-indigo-600" />
    },
    {
      id: 'spring-boot',
      title: 'Spring Boot',
      category: 'Enterprise Runtime',
      description: 'Dependency injection, request filtering, and tenant context resolution.',
      tag: 'Java Framework',
      icon: <Server className="w-4 h-4 text-purple-700" />
    },
    {
      id: 'business-logic',
      title: 'Business Logic',
      category: 'Core Service Layer',
      description: 'Transactional safety, business rule enforcement, and validation.',
      tag: 'Services',
      icon: <Cpu className="w-4 h-4 text-purple-600" />
    },
    {
      id: 'database',
      title: 'Relational Database',
      category: 'Persistence Layer',
      description: 'ACID compliance, schema normalization, and tenant data isolation.',
      tag: 'Data Store',
      icon: <Database className="w-4 h-4 text-indigo-700" />
    }
  ];

  // Scene 2: Concrete Engineering Technologies (Final Persistent State)
  const scene2Nodes: NodeData[] = [
    {
      id: 'java',
      title: 'Java (Core & Advanced)',
      category: 'Programming Language',
      description: 'Object-Oriented Programming, Multithreading, robust backend services.',
      tag: 'Language',
      icon: <Code2 className="w-4 h-4 text-amber-600" />
    },
    {
      id: 'spring-boot-tech',
      title: 'Spring Boot',
      category: 'Enterprise Framework',
      description: 'Microservices, REST APIs, dependency injection, and security filters.',
      tag: 'Framework',
      icon: <Server className="w-4 h-4 text-emerald-600" />
    },
    {
      id: 'rest-apis-tech',
      title: 'REST APIs',
      category: 'Integration Protocol',
      description: 'Robust API contracts, status code conventions, and payload validation.',
      tag: 'Architecture',
      icon: <Layers className="w-4 h-4 text-purple-600" />
    },
    {
      id: 'postgresql',
      title: 'PostgreSQL',
      category: 'Relational DBMS',
      description: 'Multi-tenant schema design, foreign key constraints, data integrity.',
      tag: 'Database',
      icon: <Database className="w-4 h-4 text-blue-600" />
    },
    {
      id: 'mysql',
      title: 'MySQL',
      category: 'Relational DBMS',
      description: 'Indexed query performance, normalization, transactional storage.',
      tag: 'Database',
      icon: <Database className="w-4 h-4 text-cyan-600" />
    }
  ];

  const currentNodes = scrollStage === 0 ? scene1Nodes : scene2Nodes;

  return (
    <div className="relative w-full">
      {/* State Switcher & Header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
            {scrollStage === 0 ? 'Architecture Pipeline (Scene 1)' : 'Engineering Stack (Transformed State)'}
          </span>
        </div>

        {/* Manual toggle pill as well */}
        <div className="inline-flex items-center p-0.5 rounded-lg bg-purple-100/70 border border-purple-200 text-[11px] font-medium text-slate-600">
          <button
            onClick={() => setScrollStage(0)}
            className={`px-2 py-0.5 rounded-md transition-all ${
              scrollStage === 0 ? 'bg-white text-purple-700 font-semibold shadow-xs' : 'hover:text-purple-700'
            }`}
          >
            Pipeline
          </button>
          <button
            onClick={() => setScrollStage(1)}
            className={`px-2 py-0.5 rounded-md transition-all ${
              scrollStage === 1 ? 'bg-white text-purple-700 font-semibold shadow-xs' : 'hover:text-purple-700'
            }`}
          >
            Tech Stack
          </button>
        </div>
      </div>

      {/* Architecture Cards Stack */}
      <div className="space-y-2 relative">
        {/* Subtle connecting vertical line */}
        <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-purple-300 via-indigo-300 to-purple-400 opacity-60 z-0"></div>

        {currentNodes.map((node, index) => {
          const isSelected = selectedNode === node.id;
          return (
            <div
              key={node.id}
              onClick={() => setSelectedNode(isSelected ? null : node.id)}
              className={`relative z-10 flex flex-col p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'bg-white border-2 border-purple-500 shadow-md shadow-purple-500/10 scale-[1.02]'
                  : 'bg-white/75 backdrop-blur-md border border-purple-200/70 hover:border-purple-400 hover:bg-white/95 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center shrink-0 shadow-xs">
                    {node.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-800 tracking-tight">
                      {node.title}
                    </span>
                    <span className="text-[10px] text-purple-600 font-medium">
                      {node.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200/60 font-semibold">
                    {node.tag}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">0{index + 1}</span>
                </div>
              </div>

              {/* Expandable detail description */}
              {isSelected && (
                <div className="mt-2.5 pt-2 border-t border-purple-100 text-xs text-slate-600 animate-fade-in flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                  <p>{node.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Explanatory footer note */}
      <div className="mt-3 px-3 py-2 rounded-xl bg-purple-50/70 border border-purple-100 text-[11px] text-slate-600 flex items-center justify-between">
        <span className="text-slate-500">
          💡 {scrollStage === 0 ? 'Scroll down to witness stack transformation' : 'Transformed architecture state active & persisted'}
        </span>
        <span className="text-purple-700 font-medium">Click any node to inspect</span>
      </div>
    </div>
  );
};
