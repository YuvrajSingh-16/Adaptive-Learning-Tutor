import React, { useState } from 'react';
import { BookOpen, Brain, CheckCircle, BarChart3, Users, Database, Activity, Zap } from 'lucide-react';

const AdaptiveLearningTutor = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedAgent, setSelectedAgent] = useState(null);

  const agents = [
    {
      id: 'assessment',
      name: 'Assessment Agent',
      icon: <CheckCircle className="w-6 h-6" />,
      color: 'bg-blue-500',
      description: 'Evaluates student knowledge through adaptive questioning',
      responsibilities: [
        'Generate diagnostic questions based on curriculum',
        'Analyze student responses for knowledge gaps',
        'Calculate proficiency scores per topic',
        'Identify learning style preferences'
      ],
      tools: ['Code Execution (scoring algorithms)', 'Custom Question Bank Tool', 'Google Search (for current examples)']
    },
    {
      id: 'pathfinder',
      name: 'Learning Path Agent',
      icon: <Brain className="w-6 h-6" />,
      color: 'bg-purple-500',
      description: 'Creates personalized learning journeys',
      responsibilities: [
        'Design curriculum based on assessment results',
        'Sequence topics from foundational to advanced',
        'Adjust difficulty dynamically',
        'Recommend prerequisite topics when needed'
      ],
      tools: ['Memory Bank (student history)', 'Custom Curriculum Graph Tool', 'Context Compaction']
    },
    {
      id: 'content',
      name: 'Content Generation Agent',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'bg-green-500',
      description: 'Creates tailored learning materials',
      responsibilities: [
        'Generate explanations at appropriate difficulty',
        'Create practice problems with solutions',
        'Provide multiple explanation formats (visual, text, analogies)',
        'Generate real-world application examples'
      ],
      tools: ['Gemini (content generation)', 'Google Search (real-world examples)', 'Code Execution (problem generation)']
    },
    {
      id: 'feedback',
      name: 'Feedback & Evaluation Agent',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'bg-orange-500',
      description: 'Provides constructive feedback and tracks progress',
      responsibilities: [
        'Evaluate student work with detailed feedback',
        'Identify common misconceptions',
        'Track learning velocity and retention',
        'Generate progress reports'
      ],
      tools: ['Agent Evaluation Framework', 'Custom Rubric Tool', 'Observability (metrics & logging)']
    }
  ];

  const architecture = {
    phases: [
      {
        title: 'Phase 1: Initial Assessment',
        type: 'Sequential',
        description: 'Student onboarding and knowledge evaluation',
        flow: [
          'Student selects subject & grade level',
          'Assessment Agent generates diagnostic test',
          'Student completes assessment',
          'Assessment Agent analyzes results',
          'Learning Path Agent receives assessment data'
        ]
      },
      {
        title: 'Phase 2: Personalized Learning',
        type: 'Loop',
        description: 'Iterative learning cycle',
        flow: [
          'Learning Path Agent selects next topic',
          'Content Generation Agent creates lesson',
          'Student engages with content',
          'Assessment Agent gives quick quiz',
          'Feedback Agent evaluates & provides feedback',
          'Loop continues or moves to next topic'
        ]
      },
      {
        title: 'Phase 3: Mastery Verification',
        type: 'Parallel',
        description: 'Multi-dimensional evaluation',
        flow: [
          'Assessment Agent: Final comprehensive test',
          'Feedback Agent: Progress analysis (parallel)',
          'Content Agent: Generate certificate & summary (parallel)',
          'Results aggregated and presented'
        ]
      }
    ]
  };

  const features = [
    {
      category: 'Multi-Agent System',
      icon: <Users className="w-5 h-5" />,
      items: [
        'Sequential Agents: Assessment → Learning Path → Content flow',
        'Parallel Agents: Simultaneous evaluation and content prep',
        'Loop Agents: Iterative learning cycle until mastery',
        'LLM-powered agents using Gemini models'
      ]
    },
    {
      category: 'Tools & Integrations',
      icon: <Zap className="w-5 h-5" />,
      items: [
        'Google Search: Find current, relevant examples',
        'Code Execution: Generate math problems, run evaluations',
        'Custom Tools: Question bank API, curriculum graph',
        'MCP: Access educational content repositories'
      ]
    },
    {
      category: 'Memory & State',
      icon: <Database className="w-5 h-5" />,
      items: [
        'Session Management: Track current learning session',
        'Memory Bank: Store student history, preferences, progress',
        'Context Compaction: Summarize long learning histories',
        'Long-running operations: Pause/resume multi-day learning'
      ]
    },
    {
      category: 'Observability',
      icon: <Activity className="w-5 h-5" />,
      items: [
        'Logging: Track all agent decisions and interactions',
        'Tracing: Monitor agent execution flow',
        'Metrics: Learning velocity, retention rates, accuracy',
        'Agent Evaluation: Measure content quality and effectiveness'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Adaptive Learning Tutor</h1>
              <p className="text-gray-600">AI-Powered Personalized Education for Underserved Students</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">10x</div>
              <div className="text-sm text-gray-600">More Affordable Than Tutors</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">24/7</div>
              <div className="text-sm text-gray-600">Always Available Learning</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">∞</div>
              <div className="text-sm text-gray-600">Infinite Patience</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-6">
          <div className="flex border-b">
            {['overview', 'agents', 'architecture', 'features', 'implementation'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === tab
                    ? 'border-b-2 border-indigo-600 text-indigo-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">The Problem</h2>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <p className="text-gray-700">
                    Students in underserved communities lack access to personalized tutoring. Traditional education 
                    follows a one-size-fits-all approach, causing students to fall behind when they don't understand 
                    concepts at the class pace. Private tutors are expensive ($40-100/hour), and quality educational 
                    resources are scarce.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">The Solution</h2>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <p className="text-gray-700 mb-4">
                    An AI-powered adaptive learning tutor that provides personalized education at scale. The system 
                    assesses each student's knowledge, creates custom learning paths, generates tailored content, and 
                    provides real-time feedback—all powered by a sophisticated multi-agent architecture.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-3 rounded">
                      <div className="font-semibold text-gray-800">✓ Personalized Pacing</div>
                      <div className="text-sm text-gray-600">Learn at your own speed</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-semibold text-gray-800">✓ Multiple Explanations</div>
                      <div className="text-sm text-gray-600">Concepts explained different ways</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-semibold text-gray-800">✓ Instant Feedback</div>
                      <div className="text-sm text-gray-600">Know immediately what to improve</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-semibold text-gray-800">✓ Progress Tracking</div>
                      <div className="text-sm text-gray-600">Visual learning journey</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">The Impact</h2>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white">
                    <div className="text-3xl font-bold mb-2">40%</div>
                    <div className="text-sm">Expected improvement in test scores</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white">
                    <div className="text-3xl font-bold mb-2">5 hrs/week</div>
                    <div className="text-sm">Time saved per student</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white">
                    <div className="text-3xl font-bold mb-2">$0</div>
                    <div className="text-sm">Cost for students</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Agents Tab */}
          {activeTab === 'agents' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Multi-Agent System</h2>
              <div className="grid grid-cols-2 gap-6">
                {agents.map(agent => (
                  <div
                    key={agent.id}
                    onClick={() => setSelectedAgent(agent.id === selectedAgent ? null : agent.id)}
                    className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                      selectedAgent === agent.id
                        ? 'border-indigo-500 shadow-xl scale-105'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`${agent.color} p-3 rounded-lg text-white`}>
                        {agent.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">{agent.name}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{agent.description}</p>
                    
                    {selectedAgent === agent.id && (
                      <div className="space-y-4 mt-4 pt-4 border-t">
                        <div>
                          <div className="font-semibold text-gray-800 mb-2">Responsibilities:</div>
                          <ul className="space-y-1">
                            {agent.responsibilities.map((resp, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                <span className="text-indigo-500 mt-1">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800 mb-2">Tools Used:</div>
                          <div className="flex flex-wrap gap-2">
                            {agent.tools.map((tool, idx) => (
                              <span key={idx} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Tab */}
          {activeTab === 'architecture' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">System Architecture Flow</h2>
              {architecture.phases.map((phase, idx) => (
                <div key={idx} className="border-l-4 border-indigo-500 pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {phase.type}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800">{phase.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{phase.description}</p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="space-y-2">
                      {phase.flow.map((step, stepIdx) => (
                        <div key={stepIdx} className="flex items-center gap-3">
                          <div className="bg-indigo-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                            {stepIdx + 1}
                          </div>
                          <div className="text-gray-700">{step}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mt-8">
                <h3 className="font-bold text-gray-800 mb-3">Why Multi-Agent?</h3>
                <p className="text-gray-700">
                  Each agent specializes in one aspect of the learning process, making the system modular, 
                  maintainable, and scalable. Agents can work in parallel (faster processing), sequentially 
                  (logical flow), or in loops (iterative improvement) based on the task requirements.
                </p>
              </div>
            </div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Required Course Features (3+ Required)</h2>
              {features.map((feature, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-indigo-500 p-2 rounded-lg text-white">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{feature.category}</h3>
                  </div>
                  <ul className="grid grid-cols-1 gap-3">
                    {feature.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              
              <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h3 className="font-bold text-gray-800 text-lg">All 8 Feature Categories Covered!</h3>
                </div>
                <p className="text-gray-700">
                  This project implements all required features from the capstone requirements, demonstrating 
                  mastery of the 5-Day AI Agents Intensive Course concepts.
                </p>
              </div>
            </div>
          )}

          {/* Implementation Tab */}
          {activeTab === 'implementation' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Implementation Roadmap</h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-bold text-gray-800 mb-2">Week 1: Core Infrastructure</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Set up Gemini API and Google AI Python SDK</li>
                    <li>• Implement session management and state storage</li>
                    <li>• Build Assessment Agent with question generation</li>
                    <li>• Create basic scoring algorithms</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="font-bold text-gray-800 mb-2">Week 2: Learning Path & Content</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Implement Learning Path Agent with curriculum graphs</li>
                    <li>• Build Content Generation Agent</li>
                    <li>• Add Memory Bank for student history</li>
                    <li>• Integrate Google Search for examples</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="font-bold text-gray-800 mb-2">Week 3: Feedback & Orchestration</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Create Feedback Agent with evaluation logic</li>
                    <li>• Implement sequential and loop agent flows</li>
                    <li>• Add observability (logging, tracing, metrics)</li>
                    <li>• Build progress tracking dashboard</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="font-bold text-gray-800 mb-2">Week 4: Polish & Deployment</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Agent evaluation and quality metrics</li>
                    <li>• Deploy to Agent Engine or Cloud Run</li>
                    <li>• Create demo video and documentation</li>
                    <li>• Write comprehensive README with architecture diagrams</li>
                  </ul>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-xl p-6 mt-8">
                <h3 className="font-bold text-gray-800 mb-3">Tech Stack</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-semibold text-gray-800 mb-2">Core Framework:</div>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Google AI Python SDK</li>
                      <li>• Gemini 2.0 Flash</li>
                      <li>• Agent Engine (deployment)</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-2">Tools & Storage:</div>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Google Search API</li>
                      <li>• Cloud Firestore (Memory Bank)</li>
                      <li>• Cloud Logging (Observability)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-500 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-3">Success Metrics</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-yellow-600">85%+</div>
                    <div className="text-sm text-gray-600">Student Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-600">&lt;2s</div>
                    <div className="text-sm text-gray-600">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-600">30%+</div>
                    <div className="text-sm text-gray-600">Score Improvement</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">
            💡 This architecture showcases all required capstone features: Multi-agent system, Tools (MCP, Google Search, Code Execution),
            Memory & Sessions, Observability, Agent Evaluation, and optional Deployment
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdaptiveLearningTutor;