package com.qiaos.batchapproval;

import java.io.Serializable;
import java.time.DayOfWeek;
import java.time.Duration;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Period;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalAdjusters;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import com.qiaos.batchapproval.model.ApprovalTask;


class Vehicle{

    void rideVehicle(Vehicle v){
        System.out.println("I am riding a vehicle!");
    }

}

class Car extends Vehicle{
    void rideVehicle(Vehicle c){
        System.out.println("I am riding a car!");
    }
}


class SpaceShip extends Vehicle{
    void rideVehicle(Vehicle c){
        System.out.println("I am riding a spaceship!");
    }

}

public class TestClass implements Serializable {
	private static final long serialVersionUID = 1L;

	enum Color {
		Red("r") {
			@Override
			public void doSomething() {
				// TODO Auto-generated method stub
				
			}
		}, White("w") {
			@Override
			public void doSomething() {
				// TODO Auto-generated method stub
				
			}
		};		
		
		private String name;
		private Color(String name) {
			this.name = name;
		}
		
		public abstract void doSomething();
	}
	
	
	
	
	private static void addCars(List<? super Car> vcls){
        vcls.add(new Car());
        vcls.add(new Car());
        vcls.add(new Car());

    }
	static ConcurrentHashMap<String, Long> count = new ConcurrentHashMap<>();
	
	public static void main(String[] args) throws Exception {
		System.out.println(LocalDateTime.now(ZoneId.of("America/New_York")));
		
		Logger.getGlobal().info("This is just a log........" + Logger.getGlobal().getParent().getLevel());
		Instant t = Instant.now();
		System.out.println(ApprovalTask.formatter.format(ZonedDateTime.ofInstant(t, ZoneId.of("America/New_York"))));
		System.out.println(ZonedDateTime.ofInstant(t, ZoneId.of("America/New_York")));
		
		
		System.out.println(ZoneId.of("America/Chicago").getRules());
		Instant t2 = Instant.now();
		System.out.println(t2);
		Logger.getGlobal().info("This is just a log2........" + Logger.getGlobal().getParent().getLevel());

		t2 = t2.plusSeconds(10);
		System.out.println(Duration.between(t, t2));
		LocalDate ld = LocalDate.of(2019, 1, 28);
		ld = ld.plusDays(7);
		ld = LocalDate.now();
		for (int i : Stream.of(1,2,3,4).collect(Collectors.toList())) {
			
		}
		Duration du = Duration.ofHours(2).plus(Duration.ofSeconds(5)).plus(Duration.ofMillis(100));
		
		ld = ld.minus(Period.ofDays(-10));
		LocalDateTime ldt = LocalDateTime.of(2007, 4, 22, 18, 29, 28);
		ldt = ldt.plus(du);
		ld = ld.with(TemporalAdjusters.next(DayOfWeek.FRIDAY));
		ZonedDateTime zz = LocalDateTime.now().atZone(ZoneId.of("America/New_York"));
		
		System.out.println(DateTimeFormatter.ofPattern("yyyy MM dd - HH:mm:ss:S z").format(zz));
		System.out.println(ZonedDateTime.now().withZoneSameInstant(ZoneId.of("America/New_York")));
//		count.put("count", 0L);
//		
//		LongAdder la = new LongAdder();
//		LongAccumulator lc = new LongAccumulator(Long::sum, 0);
//		ExecutorService pool = Executors.newCachedThreadPool();
//		
//		Stream.generate(() -> new Runnable(){
//			@Override
//			public void run() {
//				Stream.iterate(0, x->x+1).limit(1000).forEach(x -> count.compute("count", (k,v) -> v+1));
//				System.out.println(Thread.currentThread().getName() + " " + count);
//			}} ).limit(100).forEach( r -> pool.execute((Runnable)r));
//		
		ProcessBuilder pb = new ProcessBuilder("cmd.exe", "/C", "dir", "c:\\");
		
//		Process p = pb.start();
//		Base64.getEncoder().encodeToString(src)
//		BufferedReader sr = new BufferedReader(new InputStreamReader(p.getInputStream()));
//		sr.lines().forEach(x->System.out.println(x));
//		
//		pool.awaitTermination(10, TimeUnit.SECONDS);
//		
//		System.out.println(count);

//		System.out.println("0000000000");
//		CompletableFuture<String> f = CompletableFuture.supplyAsync(()-> {
//			System.out.println("isnide 00000000111");
//			Stream.iterate(0, x->x+1).limit(10000).count();
//			System.out.println("isnide 00000000222");
//			try {Thread.sleep(1000);} catch (Exception e1) {e1.printStackTrace();}
//			return "good";}, Executors.newCachedThreadPool());
//		System.out.println("111111111");
//		f.whenComplete((val, ex)->{
//			if (ex == null) {
//				System.out.println(val);
//			} else {
//				System.out.println(ex);
//			}
//		});
//		
//		System.out.println("11111111222222");
//		
//		System.out.println(Runtime.getRuntime().availableProcessors());
		
//		System.out.println("testtttt" + f.join());
//		ArrayList<ApprovalTask> newlist = new ArrayList<ApprovalTask>();
//		newlist.add(new ApprovalTask(7L, "task7"));
//		newlist.add(new ApprovalTask(3L, "task3"));
//		newlist.add(new ApprovalTask(2L, "task2"));
//		newlist.add(new ApprovalTask(1L, "task1"));
//		newlist.add(new ApprovalTask(2L, "task2"));
//		newlist.add(new ApprovalTask(1L, "task1"));
//		
//		newlist.stream().map(ApprovalTask::getTaskName).distinct().limit(10).peek(e -> System.out.println(e)).count();
//		
//		
//		List<String> t = Arrays.asList("1", "2", "");
//		Stream<Integer> s = Stream.iterate(new Integer(1), x -> x + new Integer(1)).limit(10);
//		List<Integer> lists = Stream.iterate(new Integer[]{0,1}, n-> new Integer[]{n[0]+n[1], n[0]+n[1] + n[1]})
//				.limit(10).flatMap(ints -> Arrays.stream(ints)).peek(System.out::print)
//				.collect(Collectors.toList());
//		s.mapToInt(x->x.intValue()).mapToObj(x -> new Integer(x)).collect(Collectors.toList());
////		System.out.println(s.limit(100).peek(x -> System.out.println(x)).parallel().count());
//		System.out.println(lists);
//		
//		Optional<Integer> tttt = Optional.of(1);
////		System.out.println(Arrays.asList(s.limit(100).toArray(Integer[]::new)));
////		System.out.println(s.filter(x -> x < 100).count());
////		System.out.println(Stream.generate(()-> 12).count());
//		
//		List<String> ff = Collections.checkedList(t, String.class);
//		
//		PriorityQueue<ApprovalTask> queue = new PriorityQueue<>(Comparator.comparing(ApprovalTask::getTaskId).thenComparing(ApprovalTask::getTaskName));
//		queue.add(new ApprovalTask(7L, "task1"));
//		queue.add(new ApprovalTask(3L, "task1"));
//		queue.add(new ApprovalTask(2L, "task1"));
//		queue.add(new ApprovalTask(1L, "task3"));
//		queue.add(new ApprovalTask(2L, "task5"));
//		queue.add(new ApprovalTask(1L, "task1"));
//		
//		while (!queue.isEmpty()) {
//			System.out.println(queue.remove());
//		}
//		
//		try {
//		Class c = int.class;
////		Proxy.newProxyInstance(TestClass.class.getClassLoader(), interfaces, h);
//		} catch (JDBCException ee) {
//			
//		}
////		Class.forName("com.mysql.Driver").getProtectionDomain().getCodeSource().getLocation().toExternalForm();
//		// TODO Auto-generated method stub
//		Console c = System.console();
//		System.out.println(c);
//		System.out.printf("%1.2f", 1000.0 / 3);
//		ApprovalTask[] test = { new ApprovalTask(1L,"ra2"), new ApprovalTask(2L,"3ds"), new ApprovalTask(3L,"ghj"),new ApprovalTask(1L,null),};
//		System.out.println(test.length);
//		
//		HashSet<String> my = new HashSet<String>();
	}

}

interface test {
	enum tests {
		Green, Yellow, White
	}

	default tests testmethod(tests t) {
		return tests.Yellow;
	}
}
