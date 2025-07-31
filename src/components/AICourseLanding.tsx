import React, { useState, useEffect } from 'react';
import { ChevronDown, CheckCircle, Star, Users, Award, Clock, DollarSign, Code, Zap, Target, Smartphone, Shield, ArrowRight, Play, X, Cpu, Bot, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-ai-course.jpg";
import robotBg from "@/assets/robot-bg.jpg";
const AICourseLanding = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 59,
    seconds: 32
  });
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return {
            ...prev,
            seconds: prev.seconds - 1
          };
        } else if (prev.minutes > 0) {
          return {
            ...prev,
            minutes: prev.minutes - 1,
            seconds: 59
          };
        } else if (prev.hours > 0) {
          return {
            hours: prev.hours - 1,
            minutes: 59,
            seconds: 59
          };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const stats = [{
    icon: Zap,
    text: "7 ngày → MVP hoàn chỉnh",
    color: "text-accent"
  }, {
    icon: Target,
    text: "0 kiến thức → Build được app",
    color: "text-primary"
  }, {
    icon: DollarSign,
    text: "$30/tháng → Thay vì $5000/tháng thuê dev",
    color: "text-secondary"
  }];
  const painPoints = [{
    icon: "😩",
    text: "Có ý tưởng hay nhưng không biết code"
  }, {
    icon: "💸",
    text: "Thuê developer quá đắt (3000-5000$/tháng)"
  }, {
    icon: "⏰",
    text: "Học lập trình mất 2-3 năm"
  }, {
    icon: "🤯",
    text: "Các tutorial online quá phức tạp và lỗi thời"
  }];
  const beforeAfter = [{
    before: "Học code 2-3 năm",
    after: "Học quy trình 1-2 tuần"
  }, {
    before: "Viết từng dòng code thủ công",
    after: "AI viết code, bạn chỉ đạo"
  }, {
    before: "6+ tháng cho 1 dự án",
    after: "7 ngày cho MVP"
  }, {
    before: "Thuê dev $3000-5000/tháng",
    after: "Tự làm với cost $30/tháng"
  }, {
    before: "Không biết bắt đầu từ đâu",
    after: "Roadmap rõ ràng từng bước"
  }];
  const curriculum = [{
    title: "KIẾN THỨC NỀN TẢNG",
    icon: "📚",
    lessons: 3,
    items: ["AI trong lập trình là gì?", "MVP vs Sản phẩm hoàn chỉnh", "Bộ công cụ AI cần thiết"]
  }, {
    title: "CHUẨN BỊ DỰ ÁN",
    icon: "🎯",
    lessons: 2,
    items: ["Viết PRD - Bản thiết kế sản phẩm", "Chia nhỏ công việc với TaskMaster"]
  }, {
    title: "THỰC HIỆN",
    icon: "⚡",
    lessons: 2,
    items: ["Coding với Claude - Từng bước một", "Review và sửa lỗi với CodeRabbit"]
  }, {
    title: "DỰ ÁN THỰC TẾ",
    icon: "🚀",
    lessons: 2,
    items: ["Xây dựng website bán hàng đầu tiên", "Tối ưu hóa và cải thiện"]
  }];
  const projectFeatures = [{
    icon: "🏠",
    text: "Trang chủ responsive đẹp mắt"
  }, {
    icon: "🛍️",
    text: "Catalog sản phẩm với search"
  }, {
    icon: "🛒",
    text: "Giỏ hàng và checkout hoàn chỉnh"
  }, {
    icon: "📱",
    text: "Mobile-friendly 100%"
  }, {
    icon: "⚡",
    text: "Tốc độ tải nhanh (<3s)"
  }, {
    icon: "🔒",
    text: "An toàn và bảo mật"
  }];
  const testimonials = [{
    rating: 5,
    text: "Tôi từ không biết gì về code đến có website bán hàng hoàn chỉnh chỉ trong 10 ngày. AI thực sự thần kỳ!",
    author: "Minh Anh",
    role: "Owner tiệm bánh"
  }, {
    rating: 5,
    text: "Khóa học thực tế nhất tôi từng tham gia. Không lý thuyết suông, toàn bộ là hands-on practice.",
    author: "Đức Thành",
    role: "Freelancer"
  }, {
    rating: 5,
    text: "Sau khóa học, tôi đã nhận được 3 dự án làm website cho bạn bè. ROI thu hồi trong 1 tháng!",
    author: "Thu Hương",
    role: "Marketing Manager"
  }];
  const faqs = [{
    question: "Tôi hoàn toàn không biết code, có học được không?",
    answer: "Khóa học được thiết kế dành riêng cho người mới. Bạn chỉ cần biết sử dụng máy tính cơ bản."
  }, {
    question: "Cần những công cụ gì và tốn bao nhiều tiền?",
    answer: "Tổng cost tools khoảng $30/tháng. Có thể dùng free trial để hoàn thành khóa học."
  }, {
    question: "7 ngày có thật sự đủ không?",
    answer: "7 ngày cho MVP cơ bản. Nếu muốn polish hơn có thể mất 2-3 tuần. Vẫn nhanh hơn 10x so với cách truyền thống."
  }, {
    question: "Sau khóa học có support không?",
    answer: "Support 1-1 trong 30 ngày + cộng đồng học viên private lifetime."
  }, {
    question: "Nếu không hài lòng thì sao?",
    answer: "Hoàn tiền 100% trong 30 ngày, không cần lý do."
  }];
  const socialProof = [{
    number: "1000+",
    label: "Học viên thành công"
  }, {
    number: "4.9/5",
    label: "Đánh giá trung bình"
  }, {
    number: "95%",
    label: "Hoàn thành khóa học"
  }, {
    number: "200+",
    label: "MVP đã được deploy"
  }];
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden robot-grid scanlines">
      {/* Robot Header */}
      <header className="fixed top-0 left-0 right-0 z-50 robot-card border-b border-primary/20">
        <div className="container mx-auto py-3 flex justify-between items-center px-[91px]">
          <div className="flex items-center gap-3">
            <Bot className="w-8 h-8 text-primary robot-pulse" />
            <div data-text="AI COURSE" className="text-xl font-bold holographic robot-text mx-0">AI COURSE</div>
          </div>
          
        </div>
      </header>

      {/* Section 1: Hero */}
      <section id="hero" className="hero-gradient min-h-screen flex items-center relative pt-20">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style={{
        backgroundImage: `url(${heroImage})`
      }} />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Xây dựng ứng dụng với <span className="text-gradient">AI từ A-Z</span>
              <br />
              <span className="text-3xl md:text-5xl text-muted-foreground">
                Không cần biết lập trình
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Từ ý tưởng đến MVP hoàn chỉnh trong 7 ngày
              <br />
              Sử dụng Claude, ChatGPT và các AI tools mới nhất
            </p>

            {/* Stats Row */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {stats.map((stat, index) => <Card key={index} className="robot-card">
                  <CardContent className="p-6 text-center relative z-10">
                    <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} robot-pulse`} />
                    <p className="font-semibold text-lg robot-text">{stat.text}</p>
                    <div className="loading-bar mt-4"></div>
                  </CardContent>
                </Card>)}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="robot-btn bg-primary text-primary-foreground text-lg px-8 py-4 relative" onClick={() => scrollToSection('pricing')}>
                <Cpu className="mr-2 w-5 h-5 robot-pulse" />
                ĐĂNG KÝ NGAY - 14.999.000 đ
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="robot-card border-primary text-primary hover:bg-primary/10 text-lg px-8 py-4" onClick={() => scrollToSection('curriculum')}>
                XEM CHI TIẾT KHÓA HỌC
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>1000+ học viên đã thành công</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Star className="w-4 h-4 text-accent" />
                <span>4.9/5 đánh giá</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Award className="w-4 h-4 text-accent" />
                <span>Cam kết hoàn tiền 30 ngày</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </section>

      {/* Section 2: Pain Points */}
      <section id="pain-points" className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              Bạn có đang gặp những <span className="text-gradient">vấn đề này?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {painPoints.map((point, index) => <Card key={index} className="robot-card circuit-pattern">
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="text-4xl mb-4 floating" style={{
                  animationDelay: `${index * 0.5}s`
                }}>{point.icon}</div>
                    <p className="text-lg font-medium robot-text">{point.text}</p>
                  </CardContent>
                </Card>)}
            </div>
            
            <div className="text-center">
              <p className="text-2xl font-bold holographic mb-4" data-text="SOLUTION">
                "Nếu câu trả lời là CÓ, khóa học này dành cho bạn!"
              </p>
              <Button size="lg" className="robot-btn bg-accent text-accent-foreground" onClick={() => scrollToSection('solution')}>
                <Bot className="mr-2 w-5 h-5 robot-pulse" />
                XEM GIẢI PHÁP
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Solution */}
      <section id="solution" className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Giải pháp: <span className="text-gradient">AI + Quy trình chuẩn</span> = MVP nhanh chóng
            </h2>
            
            <div className="glass rounded-2xl p-8 mb-12">
              <div className="overflow-x-auto">
                <table className="w-full text-lg">
                  <thead>
                    <tr className="border-b border-border/20">
                      <th className="text-left py-4 text-red-400">TRƯỚC</th>
                      <th className="text-center py-4">VS</th>
                      <th className="text-left py-4 text-accent">SAU</th>
                    </tr>
                  </thead>
                  <tbody>
                    {beforeAfter.map((item, index) => <tr key={index} className="border-b border-border/10">
                        <td className="py-4 text-red-400">{item.before}</td>
                        <td className="text-center py-4">→</td>
                        <td className="py-4 text-accent font-semibold">{item.after}</td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-hover" onClick={() => scrollToSection('curriculum')}>
                Khám phá chương trình học
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Curriculum */}
      <section id="curriculum" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Chương trình học <span className="text-gradient">chi tiết</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {curriculum.map((module, index) => <Card key={index} className="glass card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-3xl">{module.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold">PHẦN {index + 1}: {module.title}</h3>
                        <p className="text-muted-foreground">({module.lessons} bài)</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {module.items.map((item, itemIndex) => <li key={itemIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>)}
                    </ul>
                  </CardContent>
                </Card>)}
            </div>
            
            {/* Bonus Section */}
            <Card className="glass glow">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-4 text-gradient">🎁 BONUS PACKAGE</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Templates và prompts có sẵn</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Cộng đồng học viên private</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>1-1 support trong 30 ngày</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5: Project Showcase */}
      <section id="project" className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Dự án thực tế: <span className="text-gradient">Website Sweet Home Bakery</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              {/* Before */}
              <Card className="glass">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-red-400">TRƯỚC: Ý tưởng thô</h3>
                  <div className="bg-background-secondary rounded-lg p-4 h-48 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Code className="w-12 h-12 mx-auto mb-2" />
                      <p>Wireframe vẽ tay</p>
                      <p className="text-sm">Không biết code</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* After */}
              <Card className="glass glow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-accent">SAU: Website hoàn chỉnh</h3>
                  <div className="bg-gradient-primary rounded-lg p-4 h-48 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Smartphone className="w-12 h-12 mx-auto mb-2" />
                      <p className="font-bold">Sweet Home Bakery</p>
                      <p className="text-sm">Professional & Responsive</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {projectFeatures.map((feature, index) => <Card key={index} className="glass card-hover">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">{feature.icon}</div>
                    <p className="text-sm font-medium">{feature.text}</p>
                  </CardContent>
                </Card>)}
            </div>
            
            {/* Timeline */}
            <Card className="glass">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-center">Timeline 7 ngày</h3>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-primary font-bold">Ngày 1-2</div>
                    <p className="text-sm">Setup & Trang chủ</p>
                  </div>
                  <div>
                    <div className="text-primary font-bold">Ngày 3-4</div>
                    <p className="text-sm">Catalog sản phẩm</p>
                  </div>
                  <div>
                    <div className="text-primary font-bold">Ngày 5-6</div>
                    <p className="text-sm">Giỏ hàng & Checkout</p>
                  </div>
                  <div>
                    <div className="text-primary font-bold">Ngày 7</div>
                    <p className="text-sm">Polish & Deploy</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 6: Instructor */}
      <section id="instructor" className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              Về <span className="text-gradient">người hướng dẫn</span>
            </h2>
            
            <Card className="glass glow">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">AI Development Expert</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6 text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm">5+ năm kinh nghiệm phát triển phần mềm</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm">Đã xây dựng 50+ MVP với AI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm">Mentor cho 1000+ học viên</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm">Chuyên gia Claude, ChatGPT, GitHub Copilot</span>
                  </div>
                </div>
                
                <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-4">
                  "Tôi tin rằng mọi người đều có thể tạo ra phần mềm nếu có đúng quy trình và công cụ. 
                  AI đã thay đổi hoàn toàn cách chúng ta tiếp cận lập trình."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 7: Testimonials */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Học viên nói gì về <span className="text-gradient">khóa học</span>
            </h2>
            
            {/* Testimonials Carousel */}
            <div className="relative mb-12">
              <Card className="glass glow">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-lg mb-6 italic">"{testimonials[activeTestimonial].text}"</p>
                  <div>
                    <p className="font-bold text-primary">{testimonials[activeTestimonial].author}</p>
                    <p className="text-muted-foreground text-sm">{testimonials[activeTestimonial].role}</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Testimonial Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full transition-colors ${index === activeTestimonial ? 'bg-primary' : 'bg-muted'}`} onClick={() => setActiveTestimonial(index)} />)}
              </div>
            </div>
            
            {/* Social Proof Numbers */}
            <div className="grid md:grid-cols-4 gap-6">
              {socialProof.map((stat, index) => <Card key={index} className="glass card-hover">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Pricing */}
      <section id="pricing" className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Đầu tư cho <span className="text-gradient">tương lai của bạn</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Free DIY Column */}
              <Card className="glass border-red-500/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">TỰ HỌC MIỄN PHÍ</h3>
                  <div className="text-4xl font-bold mb-6 text-red-400">$0</div>
                  <div className="space-y-3 text-left">
                    {["Không có roadmap rõ ràng", "Mất 6+ tháng mới có kết quả", "Không có support", "Dễ bỏ cuộc giữa chừng", "Chất lượng không đảm bảo"].map((item, index) => <div key={index} className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-400" />
                        <span className="text-sm">{item}</span>
                      </div>)}
                  </div>
                </CardContent>
              </Card>
              
              {/* Premium Course Column */}
              <Card className="glass glow border-primary/30 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                    RECOMMENDED
                  </div>
                </div>
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">KHÓA HỌC PREMIUM</h3>
                   <div className="mb-6">
                     <div className="text-sm text-muted-foreground line-through">29.999.000 đ</div>
                     <div className="text-4xl font-bold text-gradient">14.999.000 đ</div>
                     <div className="text-sm text-accent">(Limited time)</div>
                   </div>
                  <div className="space-y-3 text-left mb-8">
                    {["Roadmap 7 ngày chi tiết", "Templates & prompts sẵn có", "1-1 support 30 ngày", "Cộng đồng học viên private", "Cam kết hoàn tiền 30 ngày", "Lifetime access", "Free updates"].map((item, index) => <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        <span className="text-sm">{item}</span>
                      </div>)}
                  </div>
                  
                   <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow pulse-glow" onClick={() => scrollToSection('final-cta')}>
                     ĐĂNG KÝ NGAY - 14.999.000 đ
                   </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Value Breakdown */}
            <Card className="glass mt-12">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-center mb-6">Phân tích giá trị</h3>
                <div className="grid md:grid-cols-2 gap-8">
                   <div>
                     <h4 className="font-bold mb-4">Giá trị thực tế: 24.999.000 đ</h4>
                     <div className="space-y-2 text-sm">
                       <div className="flex justify-between">
                         <span>Khóa học:</span>
                         <span>15.000.000 đ</span>
                       </div>
                       <div className="flex justify-between">
                         <span>Templates:</span>
                         <span>4.999.000 đ</span>
                       </div>
                       <div className="flex justify-between">
                         <span>1-1 Support:</span>
                         <span>4.000.000 đ</span>
                       </div>
                       <div className="flex justify-between">
                         <span>Cộng đồng:</span>
                         <span>1.000.000 đ</span>
                       </div>
                     </div>
                   </div>
                   <div className="text-center">
                     <div className="text-3xl font-bold text-gradient mb-2">14.999.000 đ</div>
                     <div className="text-accent font-bold">Tiết kiệm 10.000.000 đ!</div>
                    
                    {/* Urgency */}
                    <div className="mt-6 space-y-2">
                      <div className="flex items-center justify-center gap-2 text-red-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">Chỉ còn {timeLeft.hours}:{timeLeft.minutes.toString().padStart(2, '0')}:{timeLeft.seconds.toString().padStart(2, '0')} với giá đặc biệt</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-red-400">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">Chỉ còn 27 suất cuối cùng</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 9: FAQ */}
      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Câu hỏi <span className="text-gradient">thường gặp</span>
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => <Card key={index} className="glass">
                  <CardContent className="p-0">
                    <button className="w-full text-left p-6 flex justify-between items-center hover:bg-muted/10 transition-colors" onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}>
                      <span className="font-semibold">❓ {faq.question}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${activeFAQ === index ? 'rotate-180' : ''}`} />
                    </button>
                    {activeFAQ === index && <div className="px-6 pb-6">
                        <div className="border-t border-border/20 pt-4">
                          <p className="text-muted-foreground">✅ {faq.answer}</p>
                        </div>
                      </div>}
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Final CTA */}
      <section id="final-cta" className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Sẵn sàng thay đổi <span className="text-gradient">career của bạn?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12">
              Tham gia cùng 1000+ học viên đã thành công
              <br />
              Từ ý tưởng đến MVP chỉ trong 7 ngày
            </p>
            
            {/* Final Offer Box */}
            <Card className="glass glow mb-12">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gradient">🎯 ĐĂNG KÝ NGAY - CHỈ 14.999.000 đ</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8 text-sm">
                   <div className="flex items-center gap-2">
                     <CheckCircle className="w-4 h-4 text-accent" />
                     <span>Tặng kèm 10.000.000 đ bonus materials</span>
                   </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-red-400" />
                    <span>Ưu đãi kết thúc trong {timeLeft.hours}:{timeLeft.minutes.toString().padStart(2, '0')}:{timeLeft.seconds.toString().padStart(2, '0')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-accent" />
                    <span>Cam kết hoàn tiền 30 ngày</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-accent" />
                    <span>Lifetime access + updates</span>
                  </div>
                </div>
                
                 <Button size="lg" className="w-full max-w-md mx-auto bg-primary text-primary-foreground hover:bg-primary/90 glow pulse-glow text-xl py-6" onClick={() => window.open('https://zalo.me/84708684608', '_blank')}>
                   ĐĂNG KÝ NGAY - 14.999.000 đ
                   <ArrowRight className="ml-2 w-6 h-6" />
                 </Button>
                
                {/* Security Badges */}
                <div className="grid md:grid-cols-3 gap-4 mt-8 text-xs text-muted-foreground">
                  <div className="flex items-center justify-center gap-1">
                    <Shield className="w-3 h-3" />
                    <span>Thanh toán an toàn</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Visa, Mastercard, PayPal</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <Shield className="w-3 h-3" />
                    <span>Bảo mật SSL 256-bit</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              Liên hệ <span className="text-gradient">với chúng tôi</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Zalo Contact */}
              <Card className="glass glow card-hover">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4 text-primary robot-pulse" />
                  <h3 className="text-xl font-bold mb-2">Zalo</h3>
                  <p className="text-muted-foreground mb-4">0708684608</p>
                  <Button className="w-full robot-btn bg-primary text-primary-foreground" onClick={() => window.open('https://zalo.me/84708684608', '_blank')}>
                    Chat ngay trên Zalo
                  </Button>
                </CardContent>
              </Card>

              {/* Phone Contact */}
              <Card className="glass">
                <CardContent className="p-6 text-center">
                  <Phone className="w-12 h-12 mx-auto mb-4 text-accent robot-pulse" />
                  <h3 className="text-xl font-bold mb-2">Điện thoại</h3>
                  <p className="text-muted-foreground mb-4">0708684608</p>
                  <Button variant="outline" className="w-full robot-card border-primary text-primary" onClick={() => window.open('tel:0708684608', '_self')}>
                    Gọi ngay
                  </Button>
                </CardContent>
              </Card>

              {/* Address */}
              <Card className="glass">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-secondary robot-pulse" />
                  <h3 className="text-xl font-bold mb-2">Địa chỉ</h3>
                  <p className="text-muted-foreground mb-4">Landmark 81, Quận Bình Thạnh, TPHCM</p>
                  <Button variant="outline" className="w-full robot-card border-primary text-primary" onClick={() => window.open('https://maps.google.com/?q=Landmark+81,+Quận+Bình+Thạnh,+TPHCM', '_blank')}>
                    Xem bản đồ
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Final CTA */}
            <Card className="glass glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gradient">💬 Tư vấn miễn phí qua Zalo</h3>
                <p className="text-muted-foreground mb-6">
                  Có thắc mắc về khóa học? Chat với chúng tôi ngay để được tư vấn chi tiết
                </p>
                <Button size="lg" className="robot-btn bg-primary text-primary-foreground glow pulse-glow" onClick={() => window.open('https://zalo.me/84708684608', '_blank')}>
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Chat Zalo miễn phí
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sticky Bottom CTA on Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-sm border-t border-border/20 md:hidden z-50">
         <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow" onClick={() => window.open('https://zalo.me/84708684608', '_blank')}>
           Đăng ký ngay - 14.999.000 đ
         </Button>
      </div>
    </div>;
};
export default AICourseLanding;